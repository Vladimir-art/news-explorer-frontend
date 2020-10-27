import React from 'react';

function Register() {
  return (
    <section className="register">
      <form className="register__container" name="register" method="POST">
        <h2 className="register__text">Регистрация</h2>
        <fieldset className="register__info">
          <label className="register__name" id="email">
            Email
            <input className="register__input" id="email" name="email" placeholder="Введите почту" type="email" />
            <span className="register__input-error" id="email-error"></span>
          </label>
          <label className="register__name" id="password">
            Пароль
            <input className="register__input" id="password" name="password" placeholder="Введите пароль" type="password" />
            <span className="register__input-error" id="password-error"></span>
          </label>
          <label className="register__name" id="name">
            Имя
            <input className="register__input" id="name" name="name" placeholder="Введите своё имя" type="text" pattern="[A-Za-zАЯ-Ёая-ё -]{1,}" />
            <span className="register__input-error" id="name-error"></span>
          </label>
          <button className="register__button" type="submit">Зарегистрироваться</button>
          <p className="register__choice">или <a className="register__link" href="#">Войти</a></p>
        </fieldset>
        <button className="register__close" type="button"></button>
      </form>
    </section>
  );
}

export default Register;
