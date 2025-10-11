# TuitionConnect - Complete Setup Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy the example env file:
```bash
cp .env.local .env.local
```

Fill in your credentials in `.env.local`:

**Firebase:**
- Create project at https://console.firebase.google.com
- Enable Email/Password & Google auth
- Copy config values

**MongoDB:**
- Create cluster at https://www.mongodb.com/cloud/atlas
- Get connection string
- Paste in MONGODB_URI

**Stripe:**
- Sign up at https://stripe.com
- Get test API keys from Dashboard
- Add to env file

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure Overview

```
app/
├── (public)/          # Landing pages
├── (auth)/            # Login/Register
├── (dashboard)/       # Role dashboards
│   ├── student/
│   ├── teacher/
│   └── admin/
└── api/               # Backend endpoints

components/
├── common/            # Navbar, Footer, etc.
├── home/              # Landing components
├── dashboard/         # Dashboard widgets
└── ui/                # Reusable buttons, cards

context/               # Global state (Auth, Theme, Role)
hooks/                 # Custom React hooks
lib/                   # Third-party configs
utils/                 # Helper functions
```

## Development Workflow

### Creating New Pages

**Public Page:**
```javascript
// app/(public)/new-page/page.js
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main>Content here</main>
      <Footer />
    </>
  )
}
```

**Protected Dashboard Page:**
```javascript
// app/(dashboard)/student/new-page/page.js
'use client'
import Card from '@/components/ui/Card'

export default function NewDashboardPage() {
  return (
    <Card>
      <h1>Dashboard Content</h1>
    </Card>
  )
}
```

### Creating API Routes

```javascript
// app/api/example/route.js
import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

export async function GET(request) {
  const db = await getDatabase()
  const data = await db.collection('items').find({}).toArray()
  return NextResponse.json({ data })
}
```

### Using Hooks

```javascript
'use client'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'

export default function Component() {
  const { user, signOut } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  
  return <div>...</div>
}
```

## Testing User Roles

### Create Test Accounts:

1. **Student Account:**
   - Register at /register
   - Role: "student" (default)
   - Access: /student dashboard

2. **Teacher Account:**
   - Manually update role in MongoDB
   - Set role: "teacher"
   - Access: /teacher dashboard

3. **Admin Account:**
   - Manually update role in MongoDB
   - Set role: "admin"
   - Access: /admin dashboard

## Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    yellow: '#YOUR_COLOR',
    teal: '#YOUR_COLOR',
  }
}
```

### Logo/Branding
- Replace in components/common/Navbar.js
- Update in components/common/Footer.js
- Change app name in layout.js metadata

## Deployment

### Vercel (Easiest)
1. Push to GitHub
2. Import to Vercel
3. Add env variables
4. Deploy!

### Manual Deployment
```bash
npm run build
npm start
```

## Common Issues

**Port 3000 in use:**
```bash
lsof -ti:3000 | xargs kill
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Env variables not working:**
- Restart dev server after changing .env.local
- Check variable names start with NEXT_PUBLIC_ (client-side)

## Next Steps

1. ✅ Complete Firebase setup
2. ✅ Set up MongoDB database
3. ✅ Configure Stripe
4. 🔨 Customize theme/branding
5. 🔨 Add your business logic
6. 🔨 Deploy to production

## Support

Check README.md for detailed documentation.

Happy coding! 🚀
