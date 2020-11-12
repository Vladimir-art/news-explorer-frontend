/* eslint-disable react/prop-types */
import React from 'react';

function SavedNewsHeader(props) {

  function getKeywords() {
    const obj = {};
    let counter = 1;
    // читает количетсво повторяющихся запросов
    props.articles.forEach((item) => {
      if (obj[item.keyword]) {
        obj[item.keyword]++;
      } else {
        obj[item.keyword] = counter;
      }
    })
    // сортирует объект по убыванию запросов и превращает в массив
    const sortObj = Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => el[0]);
    // добавляет условие вывода на экран массива в виде строки
    const key = sortObj.length <= 3 ? `${' ' + sortObj.map((item) => item)}` : `${sortObj[0]}, ${sortObj[1]} и ${sortObj.length - 2} другим`;
    return key;
  }

  return (
    <section className="saved-articles">
      <div className="saved-articles__container">
        <p className="saved-articles__title">Сохранённые статьи</p>
        <h1 className="saved-articles__greeting">{props.user ? props.user.name : 'Пользователь'}, у вас&nbsp;
          <span className="saved-articles__count">{props.articles ? props.articles.length : 0}</span> сохранённых&nbsp;статей</h1>
        <p className="saved-articles__text">
          По ключевым словам:
          <span className="saved-articles__keyword">&nbsp;{getKeywords()}</span>,
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
