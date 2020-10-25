import React from 'react';

function SearchingResults() {
  return (
    <section className="searching-results">
      <h2 className="searching-results__title">Результаты поиска</h2>
      <div className="searching-results__elements"></div>
      <button className="searching-results__button">Показать еще</button>
    </section>
  );
}

export default SearchingResults;
