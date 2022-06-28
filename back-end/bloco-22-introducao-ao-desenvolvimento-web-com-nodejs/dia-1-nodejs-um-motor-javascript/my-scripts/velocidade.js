const input = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
};

const vm = () => {
  const distancia = input.questionInt('Qual a distância?(m) ');
  const tempo = input.questionInt('Qual o tempo?(s) ');

  console.log(`Velocidade média: ${velocidadeMedia(distancia, tempo)}`);
}


module.exports = {
  vm,
}
