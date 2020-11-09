/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../Validation/Validation';

function Login(props) {

  const valid = useFormWithValidation();

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
      valid={valid}
      isOpenLogin={props.isOpenLogin}
      onChangeLog={isOpenReg}
      closeLogin={closeLog}
      closePopup={props.closePopup}
      overlayClick={overlayClick}
      handleValues={valid.handleChange}
      name="login"
      title="Вход"
      button="Войти"
      link="Зарегистрироваться"
    />
  );
}

export default Login;
