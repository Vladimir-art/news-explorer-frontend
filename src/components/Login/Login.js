/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {

  function closeLog() {
    props.closeLogin()
  }

  function isOpenReg() {
    props.onChageLog();
  }

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      isOpenLogin={props.isOpenLogin}
      onChangeLog={isOpenReg}
      closeLogin={closeLog}
      closePopup={props.closePopup}
      overlayClick={overlayClick}
      name="login"
      title="Вход"
      button="Войти"
      link="Зарегистрироваться"
    />
  );
}

export default Login;
