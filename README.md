# TuitionConnect

A modern, animated landing page for connecting students with teachers, built with Next.js, Framer Motion, and Ant Design.

## 🚀 Features

- **Stunning Animations**: Smooth, professional animations using Framer Motion
- **Modern UI**: Clean, responsive design with glassmorphism effects
- **Dark Mode**: Full dark mode support with toggle
- **Optimized Performance**: Built with Next.js 14 for optimal performance
- **Mobile Responsive**: Fully responsive across all devices
- **SEO Optimized**: Semantic HTML and meta tags for better SEO

## 🎨 Design Highlights

- **Color Palette**: Blue (#2563EB) for trust, Green (#22C55E) for growth
- **Typography**: Bold gradient headings, readable body text
- **Animations**: 
  - Typing effect on hero
  - Floating elements
  - Card flip/slide animations
  - Pulse glowing buttons
  - Smooth scroll animations
  - Timeline reveal effects

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
tuitionconnect/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.js            # Root layout with theme provider
│   └── page.js              # Main landing page
├── components/
│   ├── Navbar.js            # Sticky navbar with glass effect
│   ├── Hero.js              # Hero section with typing animation
│   ├── Features.js          # Features grid with animated cards
│   ├── HowItWorks.js        # Timeline-style process flow
│   ├── Testimonials.js      # Carousel testimonials
│   ├── CTABanner.js         # Call-to-action with pulse effect
│   └── Footer.js            # Footer with gradient lines
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎭 Key Components

### Navbar
- Sticky positioning with glass morphism
- Smooth scroll to sections
- Dark/light mode toggle
- Animated hover effects

### Hero Section
- Typing animation effect
- Floating background elements
- Animated gradient orbs
- CTA buttons with hover effects

### Features Section
- 4 feature cards with unique animations
- Card tilt on hover
- Stats counter
- Alternating background colors

### How It Works
- Timeline-style layout
- Step-by-step process flow
- Animated progress indicators
- Responsive design

### Testimonials
- Auto-playing carousel
- Star ratings
- Hover pause functionality
- Floating star animations

### CTA Banner
- Gradient background
- Pulse ring effect on button
- Trust indicators
- Animated particles

### Footer
- 5-column layout
- Social media links
- Newsletter signup
- Gradient accent lines

## 🛠️ Technologies

- **Next.js 14**: React framework with App Router
- **Framer Motion**: Animation library
- **Ant Design**: UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    blue: '#2563EB',
    'blue-light': '#60A5FA',
    green: '#22C55E',
    'green-light': '#86EFAC',
  },
}
```

### Animations
Customize animations in `app/globals.css` or component files.

### Content
Update text, images, and links in respective component files.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Deploy to Vercel with one click.

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email hello@tuitionconnect.com or open an issue.

---

Made with ❤️ and Next.js
