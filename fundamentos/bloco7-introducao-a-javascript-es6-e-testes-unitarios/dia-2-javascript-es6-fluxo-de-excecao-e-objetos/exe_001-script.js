function sum() {
  try {
    const resultAlert = document.getElementById('result');
    const value1 = document.getElementById('value1');
    const value2 = document.getElementById('value2');

    if (value1.value === '' || value2.value === '') {
      throw new Error('É necesssário digitar dois valores');
    }
    if (isNaN(parseInt(value1.value)) || isNaN(parseInt(value2.value))) {
      throw new Error('Digite apenas números');
    }

    const result = parseInt(value1.value) + parseInt(value2.value);
    resultAlert.innerText = `Resultado: ${result}`;
  } catch (error) {
    const resultAlert = document.getElementById('result');
    resultAlert.innerText = `Resultado: ${error.message}`;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
