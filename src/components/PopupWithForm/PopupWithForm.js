/* eslint-disable react/prop-types */
import React from 'react';

function PopupWithForm(props) {

  return (
    <section className={`register ${props.isOpenReg && `register_opened`}`}>
      <form className="register-container" name="register" method="POST">
        <h2 className="register-container__text">{props.title}</h2>
        <fieldset className="register-container__info">
          <label className="register-container__name" id="email">
            Email
            <input className="register-container__input" id="email" name="email" placeholder="Введите почту" type="email" />
            <span className="register-container__input-error" id="email-error">Неправильный формат</span>
          </label>
          <label className="register-container__name" id="password">
            Пароль
            <input className="register-container__input" id="password" name="password" placeholder="Введите пароль" type="password" />
            <span className="register-container__input-error" id="password-error">Неправильный формат</span>
          </label>
          {props.children}
          <button className="register-container__button" type="submit">{props.button}</button>
          <p className="register-container__choice">или <a className="register-container__link" href="#">{props.link}</a></p>
        </fieldset>
        <button className="register-container__close" type="reset" aria-label="Close"></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
// register_opened
