import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <main className="main">
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}

export default SavedNews;
