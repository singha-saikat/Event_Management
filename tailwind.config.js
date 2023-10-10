/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/picture.png')",
        'dashboard': "url('https://i.ibb.co/YXK2wdg/digital-tablet-online-learning.jpg')",
        
      },
      maxWidth: {
        'none': 'none !important',
      },
      
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}
