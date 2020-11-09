/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */

import React,{ useCallback } from 'react';
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

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function useForm(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('.register-container').checkValidity());
    resetForm();
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  console.log(values, errors, isValid);
  return (
    <PopupWithForm
      isOpenReg={props.isOpenRegister}
      onChangeReg={isOpenLog}
      closeRegister={closeReg}
      closePopup={props.closePopup}
      overlayClick={overlayClick}
      handleValues={useForm}
      name="register"
      title="Регистрация"
      button="Зарегистрироваться"
      link="Войти"
    />
  );
}

export default Register;
