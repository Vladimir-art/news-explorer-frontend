import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
    </main>
  );
}

export default Main;
