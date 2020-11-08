/* eslint-disable react/prop-types */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import image from '../../utils/constants';

function SearchingResults(props) {
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    setArr(props.isResult.slice(0, 3))
  }, [props.isResult]);

  function dateFormat(str) {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('ru', options);
  }

  function showMore(e) {
    setArr(props.isResult.slice(0, arr.length + 3));
    if (arr.length >= props.isResult.length - 1) {
      e.target.remove();
    }
  }

  function onErrorImage(e) {
    e.target.setAttribute('src', image);
  }

  return (
    <section className={`searching-results ${(props.isResult.length > 0 && props.isResult.length !== null) && (props.isPreloader !== true) ? '' : 'searching-results_inactive'}`}>
      <h2 className="searching-results__title">Результаты поиска</h2>
      <div className="searching-results__elements">
        {
          arr.map((item, index) => {
            return (
              <NewsCard
                article={item}
                onSaveArticle={props.onSaveArticle}
                key={index}
                id={item._id && item._id}
                errorLoad={onErrorImage}
                src={item.urlToImage ? item.urlToImage : item.image}
                title={item.title}
                text={item.description ? item.description : item.text}
                source={item.source.name ? item.source.name : item.source}
                link={item.url ? item.url : item.link}
                time={dateFormat(item.publishedAt ? item.publishedAt : item.date)}
                // isBlueFlag={props.isBlueFlag}
                // onChangeFlag={props.onChangeFlag}
              />
            )
          })
        }
      </div>
      <button className="searching-results__button" type="button" onClick={showMore} >Показать еще</button>
    </section>
  );
}

export default SearchingResults;
