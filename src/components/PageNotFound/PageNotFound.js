/* eslint-disable react/prop-types */
import React from 'react';

function PageNotFound(props) {
console.log(props.isOpen)
  return (
    <section className={`preloader ${(props.isOpen.length === 0) && (props.isPreloader !== true) ? '' : 'preloader_inactive'}`}>
      <figure className="preloader__image"></figure>
      <h3 className="preloader__title">Ничего не найдено</h3>
      <p className="preloader__text">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default PageNotFound;
