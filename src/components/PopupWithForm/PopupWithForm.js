/* eslint-disable react/prop-types */
import React from 'react';

function PopupWithForm(props) {

  function changePopup(e) {
    e.preventDefault();
    switch (e.target.name) {
      case 'register':
        props.closeRegister();
        props.onChangeReg();
        break;
      case 'login':
        props.closeLogin();
        props.onChangeLog();
        break;
      default:
        break;
    }
  }
  // console.log(props.valid);
  return (
    <section className={`register ${props.isOpenReg && `register_opened`} ${props.isOpenLogin && `register_opened`}`} onClick={props.overlayClick}>
      <form className="register-container" name={props.name} noValidate>
        <h2 className="register-container__text">{props.title}</h2>
        <fieldset className="register-container__info">
          <label className="register-container__name" id="email">
            Email
            <input
              className={`register-container__input ${!props.valid.valuesValid.email && 'register-container__input_active'}`}
              id="email"
              name="email"
              placeholder="Введите почту"
              type="email"
              onChange={props.handleValues}
              required />
            <span
              className={`register-container__input-error ${!props.valid.valuesValid.email && 'register-container__input-error_active'}`}
              id="email-error"
            >
              {props.valid.errors.email === undefined ? 'Пожалйста, заполните поле' : props.valid.errors.email}
            </span>
          </label>
          <label className="register-container__name" id="password">
            Пароль
            <input
              className={`register-container__input ${!props.valid.valuesValid.password && 'register-container__input_active'}`}
              id="password"
              name="password"
              placeholder="Введите пароль"
              type="password"
              minLength="3"
              maxLength="12"
              onChange={props.handleValues}
              required />
            <span
              className={`register-container__input-error ${!props.valid.valuesValid.password && 'register-container__input-error_active'}`}
              id="password-error"
            >
              {props.valid.errors.password === undefined ? 'Пожалйста, заполните поле' : props.valid.errors.password}
            </span>
          </label>
          <label className={`register-container__name ${props.isOpenReg ? '' : 'register-container__name_inactive'}`} id="name">
            Имя
            <input
              className={`register-container__input ${!props.valid.valuesValid.name && 'register-container__input_active'}`}
              id="name"
              name="name"
              placeholder="Введите своё имя"
              type="text"
              pattern="[A-Za-zАЯ-Ёая-ё -]{1,}"
              minLength="2"
              maxLength="30"
              onChange={props.handleValues}
              required
            />
            <span
              className={`register-container__input-error ${!props.valid.valuesValid.name && 'register-container__input-error_active'}`}
              id="name-error"
            >
              {props.valid.errors.name === undefined ? 'Пожалйста, заполните поле' : props.valid.errors.name}
            </span>
          </label>
          <span className="register-container__input-error register-container__input-error_center" id="name-error">Такой пользователь уже есть</span>
          <button className="register-container__button" type="submit">{props.button}</button>
          <p className="register-container__choice">
            {`или `}
            <button className="register-container__link" name={props.name} onClick={changePopup}>
              {props.link}
            </button>
          </p>
        </fieldset>
        <button className="register-container__close" type="reset" aria-label="Close" onClick={props.closePopup}></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
