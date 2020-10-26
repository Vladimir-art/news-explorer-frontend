import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

import flower from '../../images/flowers-pic.png';
import ficus from '../../images/ficus.png';
import bush from '../../images/bush.png';

function SearchingResults() {
  return (
    <section className="searching-results">
      <h2 className="searching-results__title">Результаты поиска</h2>
      <div className="searching-results__elements">
        <NewsCard
          scr={flower}
          title="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков –
          охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"
        />
        <NewsCard
          scr={ficus}
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Медуза"
        />
        <NewsCard
          scr={bush}
          title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России,
          чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где..."
          source="Лента.ру"
        />
      </div>
      <button className="searching-results__button" type="button">Показать еще</button>
    </section>
  );
}

export default SearchingResults;
