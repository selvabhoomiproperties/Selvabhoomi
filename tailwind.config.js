/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4D2E', // Deep Forest Green
          light: '#2C6E49',
          dark: '#143D23',
        },
        accent: {
          DEFAULT: '#8B5E3C', // Earthy Brown
          light: '#A67B5B',
        },
        neutral: {
          DEFAULT: '#FAF9F6', // Cream
          100: '#E5E5E5',
          200: '#D4D4D4',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
};
