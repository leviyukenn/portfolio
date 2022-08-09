/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-title':"linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
        'button-back':"linear-gradient(270deg, rgb(0, 219, 216) 0%, rgb(177, 51, 255) 100%)",
        'button-front':"linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)"
      }
    },
    fontFamily:{
      "main":["Space Grotesk, sans-serif"],
      "title":["Space Grotesk, sans-serif"]
    }
  
  },
  plugins: [],
};
