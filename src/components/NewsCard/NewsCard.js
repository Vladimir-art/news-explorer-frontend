import React from 'react';
import flower from '../../images/flowers-pic.png'

function NewsCard() {
  return (
    <div className="article-element">
      <img className="article-element__image" alt="Изображение" src={flower} />
      <div className="article-element__cover">
        <p className="article-element__date">2 августа, 2019</p>
        <h3 className="article-element__title">Национальное достояние – парки</h3>
        <p className="article-element__text">
          В 2016 году Америка отмечала важный юбилей: сто лет назад
          здесь начала складываться система национальных парков – охраняемых территорий,
          где и сегодня каждый может приобщиться к природе.
        </p>
        <a className="article-element__source" href="#">Лента.ру</a>
      </div>
      <div className="article-element__loggedout">
        <p className="article-element__attantion">Войдите, чтобы сохранять статьи</p>
        <button className="article-element__flag" type="button"></button>
      </div>
      <div className="article-element__loggedin article-element__inactive">
        <p className="article-element__attantion">Убрать из сохранённых</p>
        <button className="article-element__trash" type="submit"></button>
      </div>
      <p className="article-element__category article-element__inactive">Природа</p>
    </div>
  );
}

export default NewsCard;
