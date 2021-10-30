module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        gray: {
          yellow: '#93937b',
          green: '#84947c',
          blue: '#7c8c94',
          red: '#A89594',
        },
        primary: {
          regular: '#DA522C',
          dark: '#B14224',
          light: '#F05A30',
          lighter: '#FAC6B8',
          text: '#FFF',
        },
        secondary: {
          regular: '#6E7F3A',
          dark: '#525F2B',
          light: '#859A46',
          lighter: '#D6DFB9',
          text: '#FFF',
        },
        link: '#254A8F',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringColor: ['active'],
      ringOffsetColor: ['active'],
      ringOffsetWidth: ['active'],
      ringOpacity: ['active'],
      ringWidth: ['active'],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
