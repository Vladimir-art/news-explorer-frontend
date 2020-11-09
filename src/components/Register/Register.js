/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */

import React, { useCallback } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../Validation/Validation';

function Register(props) {

  const valid = useFormWithValidation();

  function closeReg() {
    props.closeRegister();
    valid.resetForm();
  }

  function isOpenLog() {
    props.onChageReg();
  }

  function overlayClick(e) {
    props.overlay(e.target);
  }
  // console.log(valid);
  return (
    <PopupWithForm
      valid={valid}
      isOpenReg={props.isOpenRegister}
      onChangeReg={isOpenLog}
      closeRegister={closeReg}
      closePopup={props.closePopup}
      overlayClick={overlayClick}
      handleValues={valid.handleChange}
      name="register"
      title="Регистрация"
      button="Зарегистрироваться"
      link="Войти"
    />
  );
}

export default Register;
