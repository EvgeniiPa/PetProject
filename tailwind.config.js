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
      },
      height:{
        'wrapper': 'calc(100vh - 40px)',
        'min-screen' : 'calc',
      },
      minHeight:{
        "layout":"calc(100vh - 0px)"
      },
      width:{
        
      },
      maxWidth:{
        'wrapper': '1120px',
        'descriptionCard': '600px',
      },
      zIndex:{
        'miunsOne': '-1',
        '1': '1',
        '2': '2',
      }
    },
  },
  plugins: [],
}

