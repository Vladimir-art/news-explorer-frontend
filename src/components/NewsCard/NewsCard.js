/* eslint-disable react/prop-types */
import React from 'react';
// import { CurrentUserContext } from '../../context/CurrentUserContext';
import image from '../../utils/constants';

function NewsCard(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  const [saveArticle, setSaveArticle] = React.useState(false);
  React.useEffect(() => {
    const isId = JSON.parse(localStorage.getItem('newArticles')).some((item) => item.link === props.article.url);
    isId && isId !== null ? setSaveArticle(true) : setSaveArticle(false);
  }, [JSON.parse(localStorage.getItem('newArticles'))]);

  function onToggle(e) {
    if (saveArticle) {
      setSaveArticle(false);
      props.deleteArticle(e.target, props.article);
    } else {
      setSaveArticle(true);
      props.onSaveArticle(props.article, e.target.name, e.target);
    }
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    props.onDeleteArticle(props.article);
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
      <div className={props.isChangeTheme ? 'article-element__inactive' : `article-element__loggedout ${(saveArticle || props.isLoggedIn)  && 'article-element__loggedout_hover-inactive'}`}>
        <p className={`article-element__attantion ${props.isLoggedIn ? 'article-element__attantion_inactive' : ''}`}>Войдите, чтобы сохранять статьи</p>
        <button
        className={`article-element__flag ${(saveArticle && props.isLoggedIn) ? 'article-element__flag_save' : ''}`}
        id=''
        type="submit"
        onClick={onToggle}
        name={localStorage.getItem('keyword') ? localStorage.getItem('keyword') : 'Поиск'}
        ></button>
      </div>
      <div className={!props.isChangeTheme ? 'article-element__inactive' : 'article-element__loggedin'}>
        <p className="article-element__attantion">Убрать из сохранённых</p>
        <button className="article-element__trash" type="submit" onClick={handleDeleteClick}></button>
      </div>
      <p className={!props.isChangeTheme ? 'article-element__inactive' : 'article-element__category'}>{props.keyword}</p>
    </div>
  );
}

export default NewsCard;
