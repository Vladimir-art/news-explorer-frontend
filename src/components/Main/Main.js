import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import SearchingResults from '../SearchingResults/SearchingResults';
import About from '../About/About';

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <PageNotFound />
      <SearchingResults />
      <About />
    </main>
  );
}

export default Main;
