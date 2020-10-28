import React from 'react';

function PopupWithForm() {
  return (
    <section className="register register_opened">
      <form className="register-container" name="register" method="POST">
        <h2 className="register-container__text">Регистрация</h2>
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
          <label className="register-container__name" id="name">
            Имя
            <input className="register-container__input" id="name" name="name" placeholder="Введите своё имя" type="text" pattern="[A-Za-zАЯ-Ёая-ё -]{1,}" />
            <span className="register-container__input-error" id="name-error">Неправильный формат</span>
          </label>
          <span className="register-container__input-error register-container__input-error_center" id="name-error">Такой пользователь уже есть</span>
          <button className="register-container__button" type="submit">Зарегистрироваться</button>
          <p className="register-container__choice">или <a className="register-container__link" href="#">Войти</a></p>
        </fieldset>
        <button className="register-container__close" type="reset" aria-label="Close"></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
