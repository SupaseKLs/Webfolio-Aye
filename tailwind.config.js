/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.3s ease-out',
      },
      colors: {
        'nav-color': '#FFF7F6',
        'nav-font': '#3B2820',
        'primary-color': '#189AAA',
        'secondary-color': '#FFF7F6', // replace with actual color
        'content-color': '#FAECDF',
        'gray-color': '#AFACAA',
        'orange-color': '#FF4A00',
        'yellow-colors': '#F99F1B',
        'red-color': '#D94971',
        'brown-colors': '#3B2820',
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, #3B2820, #370014)',

    },
   

    screens: {
      '3xl': { 'min': '1535px' },

      '2xl': { 'max': '1535px' },
'xl-min': {'min': '1199px'},
      'xl': { 'max': '1199px' },

      'md-min': {'min': '991px'},

      'lg': { 'max': '991px' },

      'md': { 'max': '767px' },

      'sm': { 'max': '575px' },
    }
  },
  plugins: [
    
  ],
};
