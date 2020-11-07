/* eslint-disable react/prop-types */
import React from 'react';

function SearchForm(props) {

    const [value, setValue] = React.useState('');

    function handleChange(e) {
      setValue(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.submitForm(e.target, value, currDate(), pastDate());
    }

  function dateFormat(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }

  function currDate() {
    const today = new Date();
    return dateFormat(today);
  }

  function pastDate() {
    const past = new Date();
    const pastDate = past.getDate() - 7;
    past.setDate(pastDate);
    return dateFormat(past);
  }

  return (
    <section className="searchform header__main-background">
      <div className="searchform__info">
        <h1 className="searchform__title">Что творится в мире?</h1>
        <p className="searchform__text">Находите самые свежие статьи на любую тему и сохраняйте в&nbsp;своём личном кабинете.</p>
        <form className="searchform__form" onSubmit={handleSubmit}>
          <input
          className="searchform__input"
          type="text"
          id="search"
          placeholder="Введите тему новости"
          onChange={handleChange}
          required>
          </input>
          <button className="searchform__search" type="submit">Искать</button>
        </form>
        <span className="register-container__input-error" id="search-error">Неправильный формат</span>
      </div>
    </section>
  );
}

export default SearchForm;
