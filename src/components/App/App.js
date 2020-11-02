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

  function closeLogin() {
    setLogin(false);
  }

  function closeAllPopups() {
    setRegister(false);
    setLogin(false);
  }

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    });
  }, []);

  function overlayClick(e) { //оверлей по клику (принимает попап)
    if (e.classList.contains('register')) {
      closeAllPopups();
    }
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
        closePopup={closeAllPopups}
        overlay={overlayClick}
      />
      <Login
        isOpenLogin={login}
        closeLogin={closeLogin}
        onChageLog={openRegister}
        closePopup={closeAllPopups}
        overlay={overlayClick}
      />

      <Footer />
    </div>
  );
}

export default App;
