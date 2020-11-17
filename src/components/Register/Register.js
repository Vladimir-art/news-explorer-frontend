/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */

import React, { useCallback } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../Validation/Validation';

function Register(props) {

  const valid = useFormWithValidation();

  function closeReg(e) { // закрыть форму регистрации
    props.closeRegister(); // перевести стейт на false
    e.closest('.register-container').reset(); // сбросить значения полей формы
    valid.resetForm(); // сбросить стейты при валидации
  }

  function isOpenLog() { // открыть форму входа
    props.onChageReg(); // поменять стейт входа на true
  }

  function overlayClick(e) { // оверлей: отдает таргет и функцию для сброса полей
    props.overlay(e.target, valid.resetForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e.target, valid.values, valid.resetForm);
  }

  return (
    <PopupWithForm
      errorSubmit={props.errorSubmit}
      valid={valid}
      onSubmit={handleSubmit}
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
              pattern="[A-Za-zА-ЯЁа-яё -]{1,}"
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
