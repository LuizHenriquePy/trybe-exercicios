const buttonEnviar = document.getElementById('button-enviar');

function ParaFuncaoPadrao (event) {
  event.preventDefault();
}

buttonEnviar.addEventListener('click', ParaFuncaoPadrao);

const buttonLimpar = document.getElementById('button-limpar');

function limparCampos (event) {
  const inputName = document.getElementById('input-name');
  const inputEmail = document.getElementById('input-email');
  const textarea = document.getElementById('textarea-merece-ganhar');
  const inputData = document.getElementById('input-data');

  for (element of [inputData, inputEmail, textarea, inputName]) {
    element.value = '';
  }

  const check1 = document.getElementById('check1');
  const check2 = document.getElementById('check2');
  check1.checked = false;
  check2.checked = false;
}

buttonLimpar.addEventListener('click', limparCampos);