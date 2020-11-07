/* eslint-disable react/prop-types */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SearchingResults(props) {

  function dateFormat(str) {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('ru', options);
  }

  return (
    <section className={`searching-results ${props.isResult.length > 0 ? '' : 'searching-results_inactive'}`}>
      <h2 className="searching-results__title">Результаты поиска</h2>
      <div className="searching-results__elements">
        {
          props.isResult.map((item, index) => {
            return (
              <NewsCard
                key={index}
                src={item.urlToImage}
                title={item.title}
                text={item.description}
                source={item.source.name}
                link={item.url}
                time={dateFormat(item.publishedAt)}
              />
            )
          })
        }
      </div>
      <button className="searching-results__button" type="button">Показать еще</button>
    </section>
  );
}

export default SearchingResults;
