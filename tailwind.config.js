module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#304860',
      },
      textColor: {
        'gray-999': '#999999',
        'gray-333': '#333333',
        'gray-a1': '#a1a1a1',
        'gray-76': '#767676',
        'theme-blue': '#00FFFF',
        'theme-yellow': '#ffd58c',
      },
      backgroundColor: {
        'gray-fb': '#fbfbfb',
        'theme-blue': '#00FFFF',
        'theme-yellow': '#ffd58c',
        'theme-navy-blue': '#252c34',
        'black-27': '#272727',
      },
      borderColor: {
        'gray-e9': '#e9e9e9',
        'gray-999': '#999999',
        'gray-333': '#333333',
        'theme-blue': '#00FFFF',
        'theme-yellow': '#ffd58c',
        'theme-light-blue': '#414f5a',
      },
      fontFamily: {
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
        lato: '"Lato", sans-serif',
      },
      screens: {
        // '2xl': {'max': '1535px'},
        // // => @media (max-width: 1535px) { ... }
        //
        // 'xl': {'max': '1279px'},
        // // => @media (max-width: 1279px) { ... }

        '2xl': '900px',
        'xl': '900px',
        'lg': '900px',
        // 'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        // 'md': {'max': '767px'},
        // // => @media (max-width: 767px) { ... }

        // 'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
      // width: {
      //   lg: '1000px',
      //   xl: '1000px',
      // },
    },
  },
  variants: {},
  plugins: [],
};
