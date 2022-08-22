/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'section-title':"linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
        'button-back':"linear-gradient(270deg, rgb(0, 219, 216) 0%, rgb(177, 51, 255) 100%)",
        'button-front':"linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)"
      },
      gridTemplateColumns:{
        "projects":"repeat(auto-fill, minmax(400px, 1fr))"
      },
      boxShadow:{
        "project-card":"3px 3px 20px rgba(80, 78, 78, 0.5)"
      },
      
    },
    fontFamily:{
      "main":["Space Grotesk, sans-serif"],
      "title":["Space Grotesk, sans-serif"]
    },
    
    
  
  },
  plugins: [require("daisyui"), plugin(function ({ addVariant }) {
    // Add a `third` variant, ie. `third:pb-0`
    addVariant(`aria-selected`,`[aria-selected="true"]&`)
  })],
  daisyui:{
    themes:["night"]
  }
};
