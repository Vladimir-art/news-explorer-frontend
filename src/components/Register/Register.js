/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */

import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {

  function closeReg() {
    props.closeRegister()
  }

  function isOpenLog() {
    props.onChageReg();
  }

  function overlayClick(e) {
    props.overlay(e.target);
  }
console.log(props.isOpenRegister)
  return (
    <PopupWithForm
      isOpenReg={props.isOpenRegister}
      onChangeReg={isOpenLog}
      closeRegister={closeReg}
      closePopup={props.closePopup}
      overlayClick={overlayClick}
      name="register"
      title="Регистрация"
      button="Зарегистрироваться"
      link="Войти"
      // children={
      //   <>
      //     <label className="register-container__name register-container__name_inactive" id="name">
      //       Имя
      //       <input className="register-container__input" id="name" name="name" placeholder="Введите своё имя" type="text" pattern="[A-Za-zАЯ-Ёая-ё -]{1,}" required />
      //       <span className="register-container__input-error" id="name-error">Неправильный формат</span>
      //     </label>
      //     <span className="register-container__input-error register-container__input-error_center" id="name-error">Такой пользователь уже есть</span>
      //   </>
      // }
    />
  );
}

export default Register;
