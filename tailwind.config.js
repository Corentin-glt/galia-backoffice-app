const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        blueGray: colors.slate,
        gray: colors.zinc,
        trueGray: colors.neutral,
        red: colors.red,
        stone: colors.stone,
        white: colors.white,
        orange: colors.orange,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
