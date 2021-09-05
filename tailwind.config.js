module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        sam:
        {
          50: '#fffce0',
          100: '#fff7b3',
          200: '#fff283',
          300: '#ffed53',
          400: '#ffe829',
          500: '#e6cf19',
          600: '#b3a110',
          700: '#807307',
          800: '#4d4500',
          900: '#1b1700',
        },
        navCol:
        {
          50: '#f5effb',
          100: '#dad5df',
          200: '#2B3148',
          300: '#a69fad',
          400: '#8c8394',
          500: '#736a7b',
          600: '#595260',
          700: '#403b46',
          800: '#27222b',
          900: '#100a15',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
