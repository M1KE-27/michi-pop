/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosa: '#EE8FAF',
        amarillo: '#F7D24A',
        lila: '#B49BD5',
        menta: '#8CCEBE',
        naranja: '#F49A3B',
        lima: '#B8CE55',
        azul: '#8EC7E4',
        crema: '#FFF5EF',
        tinta: '#292329',
        linea: '#E2D6D0',
      },
      fontFamily: {
        display: ['Mona Sans', 'Trebuchet MS', 'sans-serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'kawaii-rosa': '0 0.28em 0 #CD6E92, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-amarillo': '0 0.28em 0 #D3A91D, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-lila': '0 0.28em 0 #8B73B0, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-menta': '0 0.28em 0 #5EA995, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-naranja': '0 0.28em 0 #CA6E16, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-lima': '0 0.28em 0 #899C31, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
        'kawaii-azul': '0 0.28em 0 #629CB8, 0 0.55em 1.1em rgba(74, 42, 58, .16)',
      },
    },
  },
  plugins: [],
};
