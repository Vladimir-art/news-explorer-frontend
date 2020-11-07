/* eslint-disable react/prop-types */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SearchingResults(props) {

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
                text={item.content}
                source={item.source.name}
                link={item.url}
                time={item.publishedAt}
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
