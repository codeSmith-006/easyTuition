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
          'yellow-light': '#FDE047',
          black: '#0A0A0A',
          'off-white': '#FFFDF5',
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom right, #FFFDF5, #FEF9E7)',
        'gradient-dark': 'linear-gradient(to bottom right, #0A0A0A, #1A1A1A)',
        'gradient-yellow': 'linear-gradient(to right, #FACC15, #FDE047)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(250, 204, 21, 0.8)' },
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
