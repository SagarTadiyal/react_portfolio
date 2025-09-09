/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec2ff',
          400: '#5aa3ff',
          500: '#2d87ff',
          600: '#0a74ff',
          700: '#085ecb',
          800: '#074c9f',
          900: '#073f84',
        },
        surface: '#ffffff',
        text: '#0f172a',
        'surface-dark': '#0b1220',
        'text-dark': '#e5e7eb'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji','Segoe UI Emoji']
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [],
}
