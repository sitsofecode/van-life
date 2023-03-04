/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors : {
        'mainColor':' #FFF7ED',
        'aboutColor':'#FFCC8D',
        'newblack' : '#161616',
        'rugged' : '#115E59',
        'simple' : '#E17654',
        'luxury':'#161616',
        'vanButton':'#FFEAD0'
      },
      backgroundImage: {
        'homebg': "url('/public/image 54.png')",
      }
    },
  },
  plugins: [],
}
