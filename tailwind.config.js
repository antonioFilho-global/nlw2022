module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    /* Criando cor personalizada dentro da biblioteca  */
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [
    /* Importando pluguins do TailCSS */
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
