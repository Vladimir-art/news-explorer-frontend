import React from 'react';

function Preloader() {
  return (
    <section className="preloader preloader_inactive">
      <i className="preloader__circle"></i>
      <p className="preloader__text">Идет поиск новостей...</p>
    </section>
  );
}

export default Preloader;
