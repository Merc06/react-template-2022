module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:
      {
        'yellow1': '#FFDA69',
        'yellow2': '#FFE8A2',
      },
      colors: 
      {
        'accent': '#ffc92c',
        'grayblack': '#262626',
      },
      fontSize: 
      {
        'xxs': '0.60rem',
      },
      transitionProperty: {
        'height': 'height'
      },
      backgroundImage: {
        'gig1': "url('images/gig1.png')",
        'gig2': "url('images/gig2.png')",
        'gig3': "url('images/gig3.png')",
        'gig4': "url('images/gig4.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
