# TuitionConnect - Premium Tuition Platform

A production-grade Next.js application connecting students and teachers for personalized learning experiences.

## 🚀 Features

- **Multi-Role System**: Separate dashboards for Students, Teachers, and Admins
- **Authentication**: Firebase Auth with email/password and Google sign-in
- **Real-time Chat**: Socket.IO integration for instant messaging
- **Payment Processing**: Stripe integration for secure payments
- **Dark Mode**: Full theme support with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Framer Motion for smooth UI transitions
- **Data Fetching**: TanStack Query for efficient API calls
- **MongoDB Integration**: Scalable database with proper indexing

## 📁 Project Structure

```
tuition-platform/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public routes
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Role-based dashboards
│   └── api/               # API routes
├── components/            # React components
│   ├── common/           # Shared components
│   ├── home/             # Homepage sections
│   ├── dashboard/        # Dashboard components
│   └── ui/               # Reusable UI components
├── context/              # React Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Third-party integrations
├── utils/                # Utility functions
└── styles/               # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Ant Design (antd)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: Firebase Auth
- **Database**: MongoDB
- **Payments**: Stripe
- **Real-time**: Socket.IO
- **Data Fetching**: TanStack Query
- **HTTP Client**: Axios

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd tuition-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Copy `.env.local` and update with your credentials:
```bash
cp .env.local .env.local
```

Update the following variables:
- Firebase configuration
- MongoDB URI
- Stripe keys
- JWT secret

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication (Email/Password and Google)
3. Add your web app and copy credentials
4. Update `.env.local` with Firebase config

### MongoDB Setup
1. Create a MongoDB database (local or Atlas)
2. Update `MONGODB_URI` in `.env.local`
3. Collections will be created automatically

### Stripe Setup
1. Create a Stripe account
2. Get API keys from Dashboard
3. Update `.env.local` with Stripe keys
4. Set up webhook endpoint for payments

### Socket.IO (Optional)
1. Create a separate Socket.IO server
2. Update `NEXT_PUBLIC_SOCKET_URL`
3. Implement real-time features

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    yellow: '#FACC15',
    teal: '#0D9488',
    black: '#111111',
  },
}
```

### Add New Routes
1. Create folder in `app/(dashboard)/[role]/`
2. Add `page.js` for the route
3. Update sidebar menu in layout

### Create API Endpoint
1. Create `route.js` in `app/api/[endpoint]/`
2. Export GET, POST, etc. methods
3. Use MongoDB helpers from `lib/mongodb.js`

## 🔐 Authentication Flow

1. User signs up/logs in via Firebase Auth
2. Create user profile in MongoDB with role
3. Redirect to role-based dashboard
4. Protected routes check authentication and role
5. API routes verify Firebase token

## 👥 User Roles

### Student
- View enrolled courses
- Track learning progress
- Make payments
- Chat with teachers

### Teacher
- Create and manage courses
- Track student progress
- View analytics
- Manage schedule

### Admin
- Manage all users
- Manage all courses
- View platform analytics
- System settings

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive with mobile-first approach.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t tuition-platform .
docker run -p 3000:3000 tuition-platform
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🧪 Testing

```bash
# Add your testing commands here
npm test
```

## 📄 License

MIT License - see LICENSE file

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For support, email support@tuitionconnect.com

## 🙏 Acknowledgments

- Next.js Team
- Firebase Team
- MongoDB Team
- Stripe Team
- All open-source contributors
