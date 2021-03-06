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
      <PageNotFound isOpen={props.isResult} isPreloader={props.isPreloader} />
      <SearchingResults
        isResult={props.isResult}
        isPreloader={props.isPreloader}
        onSaveArticle={props.onSaveArticle}
        isChangeTheme={props.isChangeTheme}
        deleteArticle={props.deleteArticle}
        isLoggedIn={props.isLoggedIn}
      />
      <About />
    </main>
  );
}

export default Main;
