/* eslint-disable react/prop-types */
import React from 'react';

function SuccessRegister(props) {
  return (
    <section className={`register ${props.isOpen ? 'register_opened' : ''}`} onClick={props.overlay}>
      <form className="register-container">
        <h2 className="register-container__text">Пользователь успешно зарегистрирован!</h2>
        <button className="register-container__link register-container__link_success-reg" name={props.name}>Войти</button>
        <button className="register-container__close" type="reset" aria-label="Close" onClick={props.closePopup}></button>
      </form>
    </section>
  )
}

export default SuccessRegister;
