module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        medium: '#d20',
        dark: '#720',
      },
      secondary: {
        medium: '#1b1',
        dark: '#161',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
