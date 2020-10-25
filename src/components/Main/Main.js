import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import SearchingResults from '../SearchingResults/SearchingResults';

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <PageNotFound />
      <SearchingResults />
    </main>
  );
}

export default Main;
