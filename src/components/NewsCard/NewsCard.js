/* eslint-disable react/prop-types */
import React from 'react';

function NewsCard(props) {
  return (
    <div className="article-element">
      <img className="article-element__image" alt="Изображение" src={props.scr} />
      <div className="article-element__cover">
        <p className="article-element__date">2 августа, 2019</p>
        <h3 className="article-element__title">{props.title}</h3>
        <p className="article-element__text">
          {props.text}
        </p>
      </div>
      <a className="article-element__source" href="#">{props.source}</a>
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
