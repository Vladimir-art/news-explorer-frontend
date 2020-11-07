import React from 'react';

function SearchForm() {


  // function dateFormat(date) {
  //   const dd = String(date.getDate()).padStart(2, '0');
  //   const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   const yyyy = date.getFullYear();

  //   return yyyy + '-' + mm + '-' + dd;
  // }

  // function currDate() {
  //   const today = new Date();
  //   return dateFormat(today);
  // }

  // function pastDate() {
  //   const past = new Date();
  //   const pastDate = past.getDate() - 7;
  //   past.setDate(pastDate);
  //   return dateFormat(past);
  // }

  return (
    <section className="searchform header__main-background">
      <div className="searchform__info">
        <h1 className="searchform__title">Что творится в мире?</h1>
        <p className="searchform__text">Находите самые свежие статьи на любую тему и сохраняйте в&nbsp;своём личном кабинете.</p>
        <form className="searchform__form">
          <input className="searchform__input" type="text" id="search" placeholder="Введите тему новости" required></input>
          <button className="searchform__search" type="submit">Искать</button>
        </form>
        <span className="register-container__input-error" id="search-error">Неправильный формат</span>
      </div>
    </section>
  );
}

export default SearchForm;
