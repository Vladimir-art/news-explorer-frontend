import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <PageNotFound />
    </main>
  );
}

export default Main;
