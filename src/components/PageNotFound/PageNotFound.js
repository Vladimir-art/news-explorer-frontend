/* eslint-disable react/prop-types */
import React from 'react';

function PageNotFound(props) {

  return (
    <section className={`preloader ${(props.isPreloader !== true || (props.isOpen !== null || (props.isOpen && props.isOpen.length > 0))) ? 'preloader_inactive' : ''}`}>
      <figure className="preloader__image"></figure>
      <h3 className="preloader__title">Ничего не найдено</h3>
      <p className="preloader__text">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default PageNotFound;
