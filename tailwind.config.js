/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#D4D4D4',
        'secondary-color': '#cf2e2e',
        'primary-color': '#636363',
        'blue': '#216fe6',
        'light-grey': '#f3f3f3'
      },
      keyframes: {
        dropDown: {
          '0%': { top: '0%' },
          '50%': { top: '90%' },
          '100%': {top: '170%'}
        },
        leftToRight: {
          '0%': { left: '-100%' },
          '50%': { left: '-50%' },
          '100%': {left: '0%'}
        },
        rightToLeft: {
          '0%': { right: '-100%' },
          '50%': { right: '-50%' },
          '100%': {right: '0%'}
        }
      },
      animation: {
        dropDown: 'dropDown 1s ease-in',
        leftToRight: 'leftToRight .5s linear',
        rightToLeft: 'rightToLeft .5s linear'
      },
      screens: {
        '950': '950px',
        '900': '900px',
        '800': '800px',
        '750': '750px',
        '600': '600px',
        '500': '500px',
        '400': '400px',
        '300': '300px'
      },
    },
  },
  plugins: [],
};
