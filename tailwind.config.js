
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      animation: {
        slide: 'slide 1.5s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
