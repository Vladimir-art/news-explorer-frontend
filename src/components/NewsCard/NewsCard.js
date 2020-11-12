/* eslint-disable react/prop-types */
import React from 'react';
// import { CurrentUserContext } from '../../context/CurrentUserContext';
import image from '../../utils/constants';

function NewsCard(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  const [saveArticle, setSaveArticle] = React.useState(false);
  // const isId = (props.article.owner === currentUser.id ) ? true : false;
  // setSaveArticle(isId);

  function onToggle(e) {
console.log(saveArticle, e)
    if (!saveArticle) {
      props.onSaveArticle(props.article, e.target.name);
      setSaveArticle(true);
    } else {
      props.deleteArticle(props.article);
      setSaveArticle(false);
    }
  }

  return (
    <div className="article-element">
      <img className="article-element__image" alt={props.source} src={(props.src === null || props.src === undefined) ? image : props.src} onError={props.errorLoad} />
      <div className="article-element__cover">
        <p className="article-element__date">{props.time}</p>
        <h3 className="article-element__title">{props.title}</h3>
        <p className="article-element__text">
          {props.text}
        </p>
      </div>
      <a className="article-element__source" href={props.link} target="_blank" rel="noreferrer">{props.source}</a>
      <div className={props.isChangeTheme ? 'article-element__inactive' : `article-element__loggedout ${saveArticle && 'article-element__loggedout_hover-inactive'}`}>
        <p className="article-element__attantion">Войдите, чтобы сохранять статьи</p>
        <button
        className={`article-element__flag ${(saveArticle) && 'article-element__flag_save'}`}
        id={props.article.owner ? props.article.owner : false}
        type="submit"
        onClick={onToggle}
        name={localStorage.getItem('keyword') ? localStorage.getItem('keyword') : 'Поиск'}
        ></button>
      </div>
      <div className={!props.isChangeTheme ? 'article-element__inactive' : 'article-element__loggedin'}>
        <p className="article-element__attantion">Убрать из сохранённых</p>
        <button className="article-element__trash" type="submit"></button>
      </div>
      <p className={!props.isChangeTheme ? 'article-element__inactive' : 'article-element__category'}>{props.keyword}</p>
    </div>
  );
}

export default NewsCard;
