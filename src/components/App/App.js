import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import * as NewsApi from '../../utils/NewsApi';
import * as MainApi from '../../utils/MainApi';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false); // стейт для смены темы черная/белая
  const [register, setRegister] = React.useState(false); // стейт для открытия /закрытия регистрации
  const [login, setLogin] = React.useState(false); // открытие/закрытие входа на сайт
  const [searchArticles, setSearchArticles] = React.useState([]); // стейт для записи всех найденных статей
  const [preloader, setPreloader] = React.useState(false); // вкл/откл прелоудера
  // const [saveArticleFlag, setSaveArticleFlag] = React.useState(false);

  React.useEffect(() => {
    setSearchArticles(JSON.parse(localStorage.getItem('articles')));
  }, [])

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
  function overlayClick(e, resetCallback) { //оверлей по клику (принимает попап и функцию для сброса полей формы)
    if (e.classList.contains('register')) {
      closeAllPopups(); // закрывает все попапы
      e.firstElementChild.reset(); // сбрасывает значения полей
      resetCallback(); // сбрасывает переменные для валидации полей
    }
  }
  // localStorage.removeItem('articles');
  function handleSubmitSearching(form, value, today, weekAgo) {
    setPreloader(true); // включаем прелоудер
    NewsApi.getArticles(value, weekAgo, today)
      .then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.articles)); // записываем данные в локаьное хранилище, в случае перезагрузки стр, данные не потеряются
        localStorage.setItem('keyword', value);
      })
      .then(() => {
        setSearchArticles(JSON.parse(localStorage.getItem('articles'))); // обновляем стейт и записываем массив статей
        setPreloader(false); // откл прелоудер
      })
      .catch((err) => console.log('Произошла ошибка: ', err))
      .finally(() => {
        form.reset(); // сбрасывем значение инпута с поиском
      })
  }

  function saveArticle(data, keyword) {
    MainApi.saveArticles('articles', { keyword, data })
      .then((data) => {
        // создает новый массив, если новая карточка совпадает со старой, то старая перезаписывается с новыми ключами объекта
        const newArticles = searchArticles.map(article => article.title === data.title ? data : article);
        localStorage.setItem('articles', JSON.stringify(newArticles));
      })
      .catch((err) => {
        console.log('Произошла ошибка: ', err);
      })
  }

  function submitRegister(form, inputValues) {
    MainApi.register('signup', inputValues)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('Произошла ошибка: ', err);
      })
  }

  function submitLogin(form, inputValues) {
    console.log(form, inputValues);
  }

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
          <Main
            submitSearching={handleSubmitSearching}
            isResult={searchArticles}
            isPreloader={preloader}
            onSaveArticle={saveArticle}
          />
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
        onSubmit={submitRegister}
      />
      <Login
        isOpenLogin={login}
        closeLogin={closeLogin}
        onChageLog={openRegister}
        closePopup={closeAllPopups}
        overlay={overlayClick}
        onSubmit={submitLogin}
      />

      <Footer />
    </div>
  );
}

export default App;
