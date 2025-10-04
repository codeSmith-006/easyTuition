# Troubleshooting Guide

## Common Issues and Solutions

### 1. Dark Mode Toggle Not Working

**Problem:** Clicking the dark mode toggle doesn't change the theme.

**Solution:** This has been fixed! The project now uses React Context to manage theme state globally.

**How it works:**
- `contexts/ThemeContext.js` - Manages global theme state
- `app/ClientLayout.js` - Applies theme classes
- `components/Navbar.js` - Uses `useTheme()` hook

**Verify it's working:**
```bash
# Make sure you have the latest files
npm install
npm run dev
```

### 2. Module Not Found Errors

**Problem:** Error: Cannot find module '@/contexts/ThemeContext'

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
```

### 3. Hydration Mismatch Warnings

**Problem:** Warning: Text content did not match. Server: "X" Client: "Y"

**Solution:** This is handled by the `suppressHydrationWarning` prop in layout.js and the mounted check in ThemeContext.js. The warnings should not appear.

If they persist:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### 4. Styles Not Applying

**Problem:** CSS classes not working or Tailwind styles missing.

**Solution:**
```bash
# Rebuild the project
npm run build
rm -rf .next
npm run dev
```

### 5. Animations Not Smooth

**Problem:** Animations are choppy or laggy.

**Solution:**
- Check if you're in production mode: `npm run build && npm start`
- Development mode can be slower due to hot reloading
- Close unnecessary browser tabs
- Check CPU usage

### 6. Ant Design Components Not Styled

**Problem:** Ant Design components look unstyled or broken.

**Solution:**
- Ensure `app/ClientLayout.js` has the ConfigProvider
- Check that imports are correct
- Verify Ant Design is installed: `npm list antd`

### 7. Dark Mode Not Persisting

**Problem:** Dark mode resets when refreshing the page.

**Solution:**
- Check browser localStorage: Open DevTools → Application → Local Storage
- Look for a `theme` key with value `'dark'` or `'light'`
- If missing, the context should create it automatically

**Manual fix:**
```javascript
// In browser console
localStorage.setItem('theme', 'dark')
// Then refresh
```

### 8. Gradient Text Not Showing

**Problem:** Gradient text appears as solid color.

**Solution:**
- Check browser support (works on all modern browsers)
- Verify `app/globals.css` has `.gradient-text` class
- Make sure the element has the class applied

### 9. Carousel Not Auto-Playing

**Problem:** Testimonials carousel doesn't auto-rotate.

**Solution:**
- Check if `autoplay` prop is set in Testimonials.js
- Verify Ant Design Carousel is imported correctly
- Try clicking the dots manually to test

### 10. Build Errors

**Problem:** `npm run build` fails with errors.

**Solution:**

**ESLint errors:**
```bash
# Temporarily disable during build
npm run build -- --no-lint
```

**Type errors (shouldn't happen since we're using JavaScript):**
```bash
# Make sure there are no .ts or .tsx files
find . -name "*.ts" -o -name "*.tsx"
```

**Dependency errors:**
```bash
# Reinstall all dependencies
rm -rf node_modules package-lock.json
npm install
```

### 11. Port 3000 Already in Use

**Problem:** Error: Port 3000 is already in use.

**Solution:**
```bash
# Option 1: Kill the process
lsof -ti:3000 | xargs kill -9

# Option 2: Use a different port
npm run dev -- -p 3001
```

### 12. Component Not Rendering

**Problem:** A component doesn't appear on the page.

**Solution:**
1. Check if it's imported in `app/page.js`
2. Verify the component is exported correctly
3. Check browser console for errors
4. Make sure component is a client component if it uses hooks

### 13. Theme Context Error

**Problem:** Error: useTheme must be used within a ThemeProvider

**Solution:**
- Make sure `app/layout.js` wraps children with `<ThemeProvider>`
- Only use `useTheme()` in components that are children of ThemeProvider
- Check import path: `import { useTheme } from '@/contexts/ThemeContext'`

### 14. LocalStorage Error on Server

**Problem:** ReferenceError: localStorage is not defined

**Solution:**
This should be handled by the context. If you see this:
- Make sure you're using 'use client' directive
- Only access localStorage inside useEffect
- Check that ThemeContext has the mounted check

### 15. Framer Motion Warnings

**Problem:** Warning: Invalid prop supplied to motion component

**Solution:**
- Check that you're passing valid motion props
- Ensure `animate`, `initial`, `transition` are objects
- Verify variants are defined correctly

## Debug Mode

To enable debug mode and see what's happening:

```javascript
// Add to components/Navbar.js temporarily
console.log('Theme state:', { isDarkMode, mounted })
```

## Still Having Issues?

1. **Check all files are present:**
```bash
ls -la app/
ls -la components/
ls -la contexts/
```

2. **Verify dependencies:**
```bash
npm list
```

3. **Check Node version:**
```bash
node --version  # Should be 18.x or higher
```

4. **Clear everything and start fresh:**
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

5. **Check browser console** for any error messages

6. **Try a different browser** (Chrome, Firefox, Safari)

## Getting Help

If you're still stuck:
1. Check the documentation files (README.md, SETUP.md)
2. Review DARK_MODE_FIX.md for theme-specific issues
3. Check GitHub issues for similar problems
4. Make sure you're using the latest version

## Useful Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Lint check
npm run lint

# Clear cache
rm -rf .next

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Check for updates
npm outdated
```

---

Most issues can be resolved by clearing the cache and reinstalling dependencies! 🔄
