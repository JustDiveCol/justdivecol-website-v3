// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          primary: {
            dark: '#0a264f',
            medium: '#133e70',
            light: '#36598b',
          },
          neutral: '#e0e0e0',
          white: '#ffffff',
          cta: {
            orange: '#ff7a00',
            green: '#40d798',
            yellow: '#f7d794',
          },
        },
      },
      // --- Tipografías de Marca ---
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      // --- Sombras de Marca ---
      boxShadow: {
        text: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      dropShadow: {
        strong: '0 2px 4px rgba(0,0,0,0.8)',
      },
      maxWidth: {
        content: '80rem', // ~1280px
      },
      spacing: {
        'section-sm': '2.5rem', // 40px
        'section-md': '4rem', // 64px
        'section-lg': '6rem', // 96px
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
