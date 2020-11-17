/* eslint-disable react/prop-types */
import React from 'react';

function Preloader(props) {

  return (
    <section className={`preloader ${props.isOpen ? '' : 'preloader_inactive'}`}>
      <i className="preloader__circle"></i>
      <p className="preloader__text">Идет поиск новостей...</p>
    </section>
  );
}

export default Preloader;
