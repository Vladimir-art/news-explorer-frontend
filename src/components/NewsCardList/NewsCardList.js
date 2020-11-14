/* eslint-disable react/prop-types */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {

  function dateFormat(str) {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('ru', options);
  }

  return (
    <section className="article-list">

      <div className="article-list__item">
        {
          props.articles.length > 0 ?
            props.articles.map((item) => {
              return (
                <NewsCard
                  isChangeTheme={props.isChangeTheme}
                  keyword={item.keyword}
                  article={item}
                  key={item._id}
                  src={item.image}
                  title={item.title}
                  text={item.text}
                  source={item.source}
                  link={item.link}
                  time={dateFormat(item.date)}
                  onDeleteArticle={props.onDeleteArticle}
                  isLoggedIn={props.isLoggedIn}
                />
              )
            }) : <h2 className="saved-articles__title">У Вас пока нет сохраненных статей...</h2>

        }
      </div>
    </section>
  );
}

export default NewsCardList;
