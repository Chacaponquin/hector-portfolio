/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#48dbfb',
        secondColor: '#20bcf2',
        primaryDarkColor: '#0a192f',
        secondDarkColor: '#233554',
        slate: '#8892b0',
        lightSlate: '#ccd6f6',
      },
      fontFamily: {
        fontCode: 'JetBrain Mono Regular',
        fontCodeBold: 'JetBrain Mono Bold',
        fontTitle: 'Poppins Extra Bold',
        fontBold: 'Poppins Bold',
      },
      borderWidth: {
        regular: '2px',
      },
      screens: {
        exsm: { max: '400px' },
        esm: { max: '640px' },
        '2xl': { min: '1400px' },
      },
    },
  },
  plugins: [],
};
