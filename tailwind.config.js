/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'authorization': "url('https://images.wallpaperscraft.ru/image/single/paporotnik_listia_zelenyj_134531_1920x1080.jpg)",
      }
    },
  },
  plugins: [],
}

