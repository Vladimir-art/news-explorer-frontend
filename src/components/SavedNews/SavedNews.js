/* eslint-disable react/prop-types */
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNews(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <SavedNewsHeader
        user={currentUser}
      />
      <NewsCardList
        articles={props.articles}
        isLoggedIn={props.isloggedIn}
      />
    </main>
  );
}

export default SavedNews;
