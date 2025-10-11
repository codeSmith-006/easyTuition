/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Light Mode Colors
          background: '#F5F5F5',
          text: '#111111',
          'text-secondary': '#4B4B4B',
          border: '#C1C1C1',
          card: '#FFFFFF',
          // Dark Mode Colors
          'background-dark': '#0D0D0D',
          'text-dark': '#E5E5E5',
          'text-secondary-dark': '#A1A1A1',
          'border-dark': '#2C2C2C',
          'card-dark': '#1E1E1E',
          // Monochrome palette
          black: '#111111',
          white: '#FFFFFF',
          'gray-50': '#F5F5F5',
          'gray-100': '#E5E5E5',
          'gray-200': '#C1C1C1',
          'gray-300': '#A1A1A1',
          'gray-400': '#4B4B4B',
          'gray-900': '#0D0D0D',
          'gray-800': '#1E1E1E',
          'gray-700': '#2C2C2C',
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #F5F5F5 0%, #E5E5E5 100%)',
        'gradient-dark': 'linear-gradient(to bottom right, #0D0D0D, #1E1E1E)',
        'gradient-mono': 'linear-gradient(to right, #111111, #4B4B4B)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
