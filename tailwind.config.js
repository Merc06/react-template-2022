module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent': '#ffc92c',
        'grayblack': '#262626',
      },
      fontSize: {
        'xxs': '0.60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
