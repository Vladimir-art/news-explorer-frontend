import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import * as NewsApi from '../../utils/NewsApi';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false); // стейт для смены темы черная/белая
  const [register, setRegister] = React.useState(false); // стейт для открытия /закрытия регистрации
  const [login, setLogin] = React.useState(false); // открытие/закрытие входа на сайт
  const [searchArticles, setSearchArticles] = React.useState([]); // стейт для записи всех найденных статей

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
  // закрыть форму регистрации
  function closeRegister() {
    setRegister(false);
  }
  // закрыть форму входа
  function closeLogin() {
    setLogin(false);
  }
  // закрыть все попапы
  function closeAllPopups() {
    setRegister(false);
    setLogin(false);
  }
  // закрыть все попапы по нажатию на Esc
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    });
  }, []);
  // оверлей попапов
  function overlayClick(e) { //оверлей по клику (принимает попап)
    if (e.classList.contains('register')) {
      closeAllPopups();
    }
  }

  function handleSubmitSearching(form, value, today, pastday) {
    NewsApi.getArticles(value, pastday, today)
      .then((data) => {
        // setSearchArticles(data.articles);
        localStorage.setItem('articles', JSON.stringify(data.articles));
      })
      .then(() => {
        setSearchArticles(JSON.parse(localStorage.getItem('articles')));
      })
      .catch((err) => console.log('Произошла ошибка: ', err))
      .finally(() => {
        form.reset();
      })
  }
  console.log(searchArticles);
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
          <Main submitSearching={handleSubmitSearching} isResult={searchArticles} />
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
