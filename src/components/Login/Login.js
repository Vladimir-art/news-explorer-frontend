/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  return (
    <PopupWithForm
      isOpenLogin={props.isOpenLogin}
      name="login"
      title="Вход"
      button="Войти"
      link="Зарегистрироваться"
    />
  );
}

export default Login;
