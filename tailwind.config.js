/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors : {
        'headerColor':' #FFF7ED',
        'aboutColor':'#FFCC8D',
        'newblack' : '#161616',
      },
      backgroundImage: {
        'homebg': "url('/public/image 54.png')",
      }
    },
  },
  plugins: [],
}
