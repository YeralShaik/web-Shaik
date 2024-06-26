/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      primary: {
        light: '#EFF9FF', 
        background: '#052F4C',
        primary: '#074D77',
        hover: '#055887',
        disable: '#76d4ff',
        secondary: '#4E8B21',
        bg: '#def2ff',
        error: '#ff9595',
        white: '#fff'
      },
      secondary: {
        light: '#fffaeb',
        default: '#ffe9a3',
        background: '#461702',
        primary: '#FFCE4A',
        hover: '#f99607',
        disable: '#fff2c6',
      }
    },
    extend: {
      screens: {

        'mobile-sm': '320px',
        'mobile-lg': '480px',
        'tablet': '768px',
        'desktop': '1024px',
        'desktop-lg': '1280px',
      },
      boxShadow: {
        'blur-lg': '0 4px 20px rgba(0, 0, 0, 0.8)',
      },
    },
  },
   variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}