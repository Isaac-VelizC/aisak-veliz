/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorDarkPrimary: '#020006',
        colorDarkSecondary: '#211F25',
        colorDarkTree: '#403E45',
        colorDarkFour: '#403E45',
        colorDarkFive: '#7E7B83',
        colorLigthPrimary: '#F9F5FF',
        colorLigthSecondary: '#EAE6F0',
        colorLigthTree: '#DBD7E0',
        colorLigthFour: '#CBC7D1',
        colorLigthFive: '#BCB8C1',
        colorUnique: '#4409ce',
      },
    },
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
    },
  },
  plugins: [],
}

