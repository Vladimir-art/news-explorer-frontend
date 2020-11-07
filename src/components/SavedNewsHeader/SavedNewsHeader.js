import React from 'react';

function SavedNewsHeader() {
  return (
    <section className="saved-articles">
      <div className="saved-articles__container">
        <p className="saved-articles__title">Сохранённые статьи</p>
        <h1 className="saved-articles__greeting">Грета, у вас&nbsp;<span className="saved-articles__count">5</span> сохранённых статей</h1>
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
