function loginValidate(event) {
  event.preventDefault();
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', loginValidate);

const submitButton = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
function buttonEnabled() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
agreement.addEventListener('click', buttonEnabled);

function buttonDisable() {
  submitButton.disabled = true;
}

const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
function counterChange() {
  const text = textArea.value.length;
  counter.innerText = textArea.maxLength - text;
}
textArea.addEventListener('keyup', counterChange);

window.onload = buttonDisable;
