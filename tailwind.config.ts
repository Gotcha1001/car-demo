/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        primary: "#663399",
        secondary: "#663399",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      boxShadow: {
        neon: "0 0 30px theme('colors.purple.500'), 0 0 60px theme('colors.purple.900')",
        sunset:
          "0 0 30px theme('colors.orange.400'), 0 0 60px theme('colors.orange.600')",
        sky: "0 0 30px theme('colors.blue.400'), 0 0 60px theme('colors.blue.600')",
        nature:
          "0 0 30px theme('colors.green.400'), 0 0 60px theme('colors.green.600')",
        teal: "0 0 30px theme('colors.teal.400'), 0 0 60px theme('colors.teal.600')",
        // New colors
        purple:
          "0 0 30px theme('colors.purple.300'), 0 0 60px theme('colors.purple.700')",
        red: "0 0 30px theme('colors.red.400'), 0 0 60px theme('colors.red.600')",
        grey: "0 0 30px theme('colors.gray.400'), 0 0 60px theme('colors.gray.600')",
        yellow:
          "0 0 30px theme('colors.yellow.400'), 0 0 60px theme('colors.yellow.600')",
        pink: "0 0 30px theme('colors.pink.400'), 0 0 60px theme('colors.pink.600')",
      },
    },
  },
  plugins: [],
};
