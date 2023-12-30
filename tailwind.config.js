/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "luxury"],
  },
  extend: {
    animation: {
      typewriter: "typewriter 2s steps(22) forwards"
    },
    keyframes: {
      typewriter: {
        to: {
          left: "100%"
        }
      }
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],

}