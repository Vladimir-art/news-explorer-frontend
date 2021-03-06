/* eslint-disable react/prop-types */
import React from 'react';

function PopupWithForm(props) {

  function changePopup(e) {
    e.preventDefault();
    switch (e.target.name) {
      case 'register':
        props.closeRegister(e.target);
        props.onChangeReg();
        break;
      case 'login':
        props.closeLogin(e.target);
        props.onChangeLog();
        break;
      default:
        break;
    }
  }

  return (
    <section className={`register ${props.isOpenReg && `register_opened`} ${props.isOpenLogin && `register_opened`}`} onClick={props.overlayClick}>
      <form className="register-container" name={props.name} onSubmit={props.onSubmit} method="POST" noValidate>
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
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={props.handleValues}
              required />
            <span
              className={`register-container__input-error ${!props.valid.valuesValid.email && 'register-container__input-error_active'}`}
              id="email-error"
            >
              {props.valid.errors.email === undefined ? 'Пожалуйста, заполните поле' : props.valid.errors.email}
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
              {props.valid.errors.password === undefined ? 'Пожалуйста, заполните поле' : props.valid.errors.password}
            </span>
          </label>
          {props.children}
          <span
          className={`register-container__input-error register-container__input-error_center ${props.errorSubmit && 'register-container__input-error_active'}`}
          id="name-error">{props.errorSubmit}</span>
          <button
            className={`register-container__button ${!props.valid.isValid && 'register-container__button_inactive'}`}
            type="submit"
            disabled={!props.valid.isValid}
          >
            {props.button}
          </button>
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
