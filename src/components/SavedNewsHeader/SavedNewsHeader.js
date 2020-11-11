/* eslint-disable react/prop-types */
import React from 'react';

function SavedNewsHeader(props) {

  function getKeywords() {
    const keywords = props.articles.map((item) => item.keyword);
    return keywords;
  }
console.log(getKeywords());
  return (
    <section className="saved-articles">
      <div className="saved-articles__container">
        <p className="saved-articles__title">Сохранённые статьи</p>
        <h1 className="saved-articles__greeting">{props.user ? props.user.name : 'Пользователь'}, у вас&nbsp;
          <span className="saved-articles__count">{props.articles ? props.articles.length : 0}</span> сохранённых&nbsp;статей</h1>
        <p className="saved-articles__text">
          По ключевым словам:
          <span className="saved-articles__keyword">&nbsp;Природа</span>,
          <span className="saved-articles__keyword">&nbsp;Тайга</span>&nbsp;и
          <span className="saved-articles__keyword">&nbsp;2-м другим</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
