/* eslint-disable react/prop-types */
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
  console.log(props.articles);
  return (
    <main className="main">
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}

export default SavedNews;
