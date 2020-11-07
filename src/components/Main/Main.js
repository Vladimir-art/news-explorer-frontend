/* eslint-disable react/prop-types */
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import SearchingResults from '../SearchingResults/SearchingResults';
import About from '../About/About';

function Main(props) {
  return (
    <main className="main">
      <SearchForm submitForm={props.submitSearching} />
      <Preloader isOpen={props.isPreloader} />
      <PageNotFound />
      <SearchingResults isResult={props.isResult} />
      <About />
    </main>
  );
}

export default Main;
