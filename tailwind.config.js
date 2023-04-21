/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#48dbfb',
        darkColor: '#0a192f',
      },
      fontFamily: {
        fontCode: 'JetBrain Mono Regular',
        fontCodeBold: 'JetBrain Mono Bold',
        fontTitle: 'Poppins Extra Bold',
        fontBold: 'Poppins Bold',
      },
    },
  },
  plugins: [],
};
