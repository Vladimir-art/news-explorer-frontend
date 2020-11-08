/* eslint-disable react/prop-types */
import React from 'react';
import image from '../../utils/constants';

function NewsCard(props) {

  const [saveArticle, setSaveArticle] = React.useState(false);

  function onSave(e) {
    // props.onChangeFlag(e.target, e.target.id);
    setSaveArticle(!saveArticle);
    props.onSaveArticle(e.target, props.article, e.target.name);
    // console.log(e.target.name);
  }

  return (
    <div className="article-element" id={props.id + 1}>
      <img className="article-element__image" alt={props.source} src={props.src === null ? image : props.src} onError={props.errorLoad} />
      <div className="article-element__cover">
        <p className="article-element__date">{props.time}</p>
        <h3 className="article-element__title">{props.title}</h3>
        <p className="article-element__text">
          {props.text}
        </p>
      </div>
      <a className="article-element__source" href={props.link} target="_blank" rel="noreferrer">{props.source}</a>
      <div className={`article-element__loggedout ${saveArticle && 'article-element__loggedout_hover-inactive'}`}>
        <p className="article-element__attantion">Войдите, чтобы сохранять статьи</p>
        <button
        className={`article-element__flag ${saveArticle && 'article-element__flag_save'}`}
        id={props.id}
        type="button"
        onClick={onSave}
        name={localStorage.getItem('keyword') ? localStorage.getItem('keyword') : 'Поиск'}
        ></button>
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
