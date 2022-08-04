module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    /* Criando cor personalizada dentro da biblioteca  */
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: {
        /* sobreescrevendo a a propriedade md de borda de  6px para 4px */
        md: '4px'
      }
    },
  },
  plugins: [
    /* Importando pluguins do TailCSS */
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
