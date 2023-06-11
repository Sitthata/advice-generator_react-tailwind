/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        'primary': "hsl(193, 38%, 86%)",
        'secondary': "hsl(150, 100%, 66%)",
        'neutral': {
          100: "hsl(217, 19%, 38%)",
          200: "hsl(217, 19%, 24%)",
          300: "hsl(218, 23%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
