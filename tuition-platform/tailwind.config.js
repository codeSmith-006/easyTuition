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
          yellow: '#FACC15',
          'yellow-dark': '#EAB308',
          teal: '#0D9488',
          'teal-light': '#14B8A6',
          'teal-dark': '#0F766E',
          black: '#111111',
          'soft-white': '#F5F5F5',
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
        'gradient-teal-dark': 'linear-gradient(135deg, #111111 0%, #0D9488 100%)',
        'gradient-yellow-teal': 'linear-gradient(to right, #FACC15, #0D9488)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(13, 148, 136, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
