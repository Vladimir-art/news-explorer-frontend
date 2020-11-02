import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
// import Register from '../Register/Register';
import Footer from '../Footer/Footer';
// import Login from '../Login/Login';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false);

  function changeThemes() {
    setChangeTheme(true);
  }

  return (
    <div className="page">
      <Header isChangeTheme={changeTheme} onChange={changeThemes} />
      {/* <Register /> */}
      {/* <Login /> */}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
