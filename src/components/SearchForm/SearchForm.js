import React from 'react';

function SearchForm() {
  return (
    <section className="searchform header__main-background">
      <div className="searchform__info">
        <h1 className="searchform__title">Что творится в мире?</h1>
        <p className="searchform__text">Находите самые свежие статьи на любую тему и сохраняйте в&nbsp;своём личном кабинете.</p>
        <form className="searchform__form">
          <input className="searchform__input" type="text" placeholder="Введите тему новости" required></input>
          <button className="searchform__search" type="submit">Искать</button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
