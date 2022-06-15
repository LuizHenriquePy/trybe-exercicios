const numberIsValid = (num1, num2) => (num1 === num2) ? 'Parabéns você ganhou!': 'Tente novamente :(';

const draw = (chosenNumber, isValid) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  console.log(isValid(randomNumber, chosenNumber));
};

draw(5, numberIsValid);
