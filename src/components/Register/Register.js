/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */

import React, { useCallback } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../Validation/Validation';

function Register(props) {

  const valid = useFormWithValidation();

  function closeReg(e) {
    props.closeRegister();
    e.closest('.register-container').reset();
    valid.resetForm();
  }

  function isOpenLog() {
    props.onChageReg();
  }

  function overlayClick(e) {
    props.overlay(e.target, valid.resetForm);
    // valid.resetForm();
  }

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
      children={
        (
          <label className={`register-container__name `} id="name">
            Имя
            <input
              className={`register-container__input ${!valid.valuesValid.name && 'register-container__input_active'}`}
              id="name"
              name="name"
              placeholder="Введите своё имя"
              type="text"
              pattern="[A-Za-zАЯ-Ёая-ё -]{1,}"
              minLength="2"
              maxLength="30"
              onChange={valid.handleChange}
              required
            />
            <span
              className={`register-container__input-error ${!valid.valuesValid.name && 'register-container__input-error_active'}`}
              id="name-error"
            >
              {valid.errors.name === undefined ? 'Пожалуйста, заполните поле' : valid.errors.name}
            </span>
          </label>
        )
      }
    />
  );
}

export default Register;
