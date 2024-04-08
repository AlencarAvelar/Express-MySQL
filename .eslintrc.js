module.exports = {
    env: {
      node: true,
      es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      'indent': ['error', 2], // Dois espaços de indentação
      'comma-dangle': ['error', 'never'], // Vírgula final proibida
      'no-console': 'off', // Permitir o uso de console
      'no-unused-vars': 'warn' // Avisar sobre variáveis não utilizadas
    }
  };