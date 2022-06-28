const input = require('readline-sync');

const imc = (peso, altura) => {
  return peso / (altura * 2);
};

const tableIMC = (imcPessoa) => {
  if (imcPessoa < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (imcPessoa >= 18.5 && imcPessoa <= 24.9) {
    console.log('Peso normal');
  } else if (imcPessoa >= 25 && imcPessoa <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imcPessoa >= 30 && imcPessoa <= 34.9) {
    console.log('Obesidade grau I');
  } else if (imcPessoa >= 35 && imcPessoa <= 39.9) {
    console.log('Obesidade grau II');
  } else if (imcPessoa >= 40) {
    console.log('Obesidade graus III e IV');
  }
}

const IMC = () => {
  const peso = input.questionFloat('Qual seu peso?(kg) ');
  const altura = input.questionFloat('Qual sua altura?(m) ');

  const imcPessoa = imc(peso, altura);

  console.log(`IMC: ${ imcPessoa }`);
  tableIMC(imcPessoa);
}

module.exports = {
  IMC,
}
