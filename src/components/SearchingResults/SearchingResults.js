import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SearchingResults() {
  return (
    <section className="searching-results">
      <h2 className="searching-results__title">Результаты поиска</h2>
      <div className="searching-results__elements">
        <NewsCard />
      </div>
      <button className="searching-results__button" type="button">Показать еще</button>
    </section>
  );
}

export default SearchingResults;
