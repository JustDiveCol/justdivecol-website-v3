/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // --- Colores de Marca ---
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
