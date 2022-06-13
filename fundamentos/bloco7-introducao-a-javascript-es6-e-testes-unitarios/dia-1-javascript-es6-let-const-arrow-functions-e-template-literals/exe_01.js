// Sem arrow function e template literals
function testingScope1(escopo) {
  if (escopo === true) {
    var ifScope = 'O escopo é valido!';
    ifScope = ifScope + ' Seu valor é ' + escopo;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope1(true);

// Com arrow function e template literals
const testingScope = escopo => ((escopo === true) ? console.log('O escopo é valido! Seu valor é') : console.log('Não devo ser utilizada fora meu escopo (else)'));

testingScope(true);
testingScope(false);