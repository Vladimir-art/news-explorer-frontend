import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  // стейт для включения темной темя для шапки сайта
  function changeThemes() {
    setChangeTheme(true);
  }

  // стейт для отключения темной темы
  function resetChangeTheme() {
    setChangeTheme(false);
  }

  //функция для открытия попапа с регистрацией
  function openRegister() {
    setRegister(true);
  }

  // функция по открытию попапа войти
  function openLogin() {
    setLogin(true);
  }

  function closeRegister() {
    setRegister(false);
  }
  console.log(register, '  ncjdjdj  ', login)
  return (
    <div className="page">
      <Header
        isChangeTheme={changeTheme} // стейт для вкл/откл темной темы
        onChange={changeThemes} // вкл темной темы
        resetTheme={resetChangeTheme} // откл темной темы
        handleRegister={openRegister}
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>

      <Register
        isOpenRegister={register} // открытие попапа регистрации
        closeRegister={closeRegister}
        onChageReg={openLogin}
      />
      <Login isOpenLogin={login} />

      <Footer />
    </div>
  );
}

export default App;
