'use strict';

const form = document.querySelector('.popup__form');

const inputControl = form.querySelector('.popup__input-control');
const errorInputControl = form.querySelector('.popup__control-error');

const inputPassword = form.querySelector('.popup__input-password');
const errorInputPassword = form.querySelector('.popup__password-error');

const inputPasswordAgain = form.querySelector('.popup__input-password-again');
const errorInputPasswordAgain = form.querySelector('.popup__password-again-error');

const buttonChangePassword = document.querySelector('.popup__button');

function handleSubmit() {

  errorInputControl.classList.add('popup__error');
  errorInputControl.textContent = `Неверное контрольное слово`;

  if (inputPassword.value.length < 7) {
    errorInputPassword.textContent = `Пароль должен быть не менее 6 символов`;
    errorInputPassword.classList.add('popup__error');
  };

  if (inputPassword.value !== inputPasswordAgain.value) {
    errorInputPasswordAgain.textContent = `Пароли не совпадают`;
    errorInputPasswordAgain.classList.add('popup__error');
  };

}

buttonChangePassword.addEventListener('click', handleSubmit);
