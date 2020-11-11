/* eslint-disable react/prop-types */
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {

  return (
    <main className="main">
      <SavedNewsHeader />
      <NewsCardList
        articles={props.articles}
      />
    </main>
  );
}

export default SavedNews;
