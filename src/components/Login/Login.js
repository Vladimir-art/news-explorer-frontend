import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login() {
  return (
    <PopupWithForm
      name="login"
      title="Вход"
      button="Войти"
      link="Зарегистрироваться"
    />
  );
}

export default Login;
