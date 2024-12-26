module.exports = {
  content: ['./src/**/*.{html,js,jsx, vue}', './public/index.html'],
  extend: {
    animation: {
      fadeIn: 'fadeIn 2s ease-out forwards',
      slideUp: 'slideUp 1s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideUp: {
        '0%': { transform: 'translateY(100px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
    },
  },
  plugins: [],
};
