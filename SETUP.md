# TuitionConnect - Setup Guide

## 🚀 Quick Start

Follow these steps to get the project running on your local machine:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14.2.5
- React 18.3.1
- Framer Motion 11.3.19
- Ant Design 5.19.3
- Lucide React 0.424.0
- Tailwind CSS 3.4.7

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tuitionconnect/
├── app/
│   ├── globals.css          # Global styles, animations, custom CSS
│   ├── layout.js            # Root layout with theme provider
│   └── page.js              # Main page integrating all components
├── components/
│   ├── Navbar.js            # Sticky navbar with glass effect
│   ├── Hero.js              # Hero with typing animation
│   ├── Features.js          # 4 animated feature cards + stats
│   ├── HowItWorks.js        # Timeline-style 3-step process
│   ├── Testimonials.js      # Auto-playing carousel
│   ├── CTABanner.js         # Call-to-action with pulse effect
│   └── Footer.js            # Footer with links and newsletter
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind + custom animations
├── postcss.config.js        # PostCSS configuration
├── jsconfig.json            # Path aliases configuration
└── package.json             # Dependencies
```

## 🎨 Features Overview

### 1. **Navbar**
- Sticky positioning with glassmorphism effect
- Shrinks on scroll
- Dark/Light mode toggle with Ant Design Switch
- Smooth hover underline animations
- Mobile responsive

### 2. **Hero Section**
- Text typing animation: "Find the Right Teacher, Every Time"
- Gradient text with color shift animation
- Floating background icons (books, pens, graduation caps)
- Animated gradient orbs
- Two CTA buttons with bounce/scale hover effects
- Floating student-teacher illustration

### 3. **Features Section**
- 4 cards with unique animations:
  - Easy Search (flip-in from left)
  - Verified Teachers (fade-up)
  - Flexible Learning (slide from right)
  - Affordable & Transparent (pop-up scale)
- Card tilt effect on hover with neon glow
- Alternating blue/green backgrounds
- Stats counter (10,000+ teachers, 50,000+ students, 4.9/5 rating)

### 4. **How It Works**
- Timeline-style layout with vertical line
- 3 steps: Search → Connect & Chat → Start Learning
- Each step reveals on scroll
- Animated emojis (🔍 💬 📚)
- Responsive: horizontal timeline on desktop, vertical on mobile

### 5. **Testimonials**
- Ant Design Carousel with auto-play (5s intervals)
- Pause on hover
- 5-star ratings with Ant Design Rate component
- Floating star animations in background
- 5 testimonials from students, parents, and teachers
- Stats bar below carousel

### 6. **CTA Banner**
- Full-width gradient background (blue → purple → green)
- Animated particle background
- Main button with pulse ring animation
- Neon glow effect on hover
- Trust indicators (No Hidden Fees, Cancel Anytime, etc.)

### 7. **Footer**
- 5-column layout with links
- Company, For Students, For Teachers, Support, Contact
- Social media icons with hover animations
- Newsletter signup form
- Gradient top border
- Made with ❤️ animation

## 🎭 Animation Techniques Used

### Framer Motion Animations:
- **spring**: Smooth, natural motion
- **whileInView**: Scroll-triggered animations
- **whileHover**: Hover state animations
- **animate**: Continuous/looped animations
- **variants**: Complex animation sequences
- **staggerChildren**: Sequential reveals

### Custom CSS Animations:
- **Gradient Text**: Animated gradient shift
- **Hover Underline**: Left-to-right underline
- **Float**: Gentle floating motion
- **Pulse Glow**: Expanding glow effect
- **Typing Cursor**: Blinking cursor

## 🎨 Color Palette

```css
Primary Blue: #2563EB (Trust, Structure)
Light Blue: #60A5FA (Highlights)
Primary Green: #22C55E (Growth, Encouragement)
Light Green: #86EFAC (Highlights)

Light Mode: Gradient from blue-50 to green-50
Dark Mode: Gradient from gray-900 to gray-800
```

## 🔧 Customization Guide

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    blue: '#YOUR_COLOR',
    green: '#YOUR_COLOR',
  },
}
```

### Modify Animations

Edit animation duration in component files:
```js
transition={{ duration: 0.6 }} // Change duration
animate={{ y: [0, -20, 0] }}   // Change movement
```

### Update Content

All text content is in the component files:
- Navbar items: `components/Navbar.js`
- Hero text: `components/Hero.js`
- Features: `components/Features.js`
- Testimonials: `components/Testimonials.js`
- Footer links: `components/Footer.js`

### Add New Sections

1. Create component in `components/`
2. Import in `app/page.js`
3. Add between existing sections

## 📱 Responsive Design

- **Mobile**: Stack elements vertically, hamburger menu (optional)
- **Tablet**: 2-column grids
- **Desktop**: Full multi-column layouts

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ⚡ Performance Optimizations

1. **Next.js App Router**: Server components by default
2. **'use client'**: Only on interactive components
3. **Framer Motion**: Uses CSS transforms (GPU-accelerated)
4. **Ant Design**: Tree-shakeable imports
5. **Tailwind CSS**: Purges unused styles
6. **Image Optimization**: Use Next.js Image component for photos

## 🐛 Troubleshooting

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying
```bash
npm run build
rm -rf .next
npm run dev
```

### Dark mode not working
- Check localStorage in browser DevTools
- Clear browser cache

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
```
Upload `.next` folder and `package.json` to your hosting provider.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Ant Design Documentation](https://ant.design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Notes

- All animations are optimized for performance
- Dark mode preference saved in localStorage
- Fully SEO-friendly with semantic HTML
- Accessibility features included (ARIA labels, keyboard navigation)

---

Happy Coding! 🚀
