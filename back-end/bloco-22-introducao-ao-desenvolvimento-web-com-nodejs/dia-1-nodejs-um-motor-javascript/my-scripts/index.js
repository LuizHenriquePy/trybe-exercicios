const input = require('readline-sync');
const { vm } = require('./velocidade');
const { IMC } = require('./imc');

const option = input.questionInt(`
[ 1 ] Velocidade média
[ 2 ] IMC

Qual opção? `);

if (option === 1) {
  vm();
} else {
  IMC();
}
