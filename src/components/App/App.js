import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import SuccessRegister from '../SuccessRegister/SuccessRegister';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as NewsApi from '../../utils/NewsApi';
import * as MainApi from '../../utils/MainApi';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false); // стейт для смены темы черная/белая
  const [register, setRegister] = React.useState(false); // стейт для открытия /закрытия регистрации
  const [login, setLogin] = React.useState(false); // открытие/закрытие входа на сайт
  const [searchArticles, setSearchArticles] = React.useState([]); // стейт для записи всех найденных статей
  const [preloader, setPreloader] = React.useState(false); // вкл/откл прелоудера
  const [successRegister, setSuccessRegister] = React.useState(false); // попап после успешной регистрации
  const [errorStatus, setErrorStatus] = React.useState('');

  const [currentUser, setCurrentUser] = React.useState({});

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

  function closeSuccessRegister() {
    setSuccessRegister(false)
  }

  // закрыть все попапы
  function closeAllPopups() {
    setRegister(false);
    setLogin(false);
    setSuccessRegister(false);
    setErrorStatus('');
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

  function submitRegister(form, inputValues, inputReset) {
    MainApi.register('signup', inputValues)
      .then((data) => {
        if (data.statusCode) {
          setErrorStatus(data.validation.body.message);
        } else {
          setCurrentUser(inputValues); // доделать и подумать!!!
          closeAllPopups(); // закрываем попап с регистрацией
          setSuccessRegister(true); // меняем стейт для открытия попапа с успешной регистрацией
        }
      })
      .then(() => {
        form.reset(); // сбрасываем инпуты
        inputReset(); // сбрасываем поля валидации
      })
      .catch((err) => {
        console.log('Произошла ошибка: ', err);
      })
  }
  console.log(currentUser);
  function submitLogin(form, inputValues, inputReset) {
    MainApi.login('signin', inputValues)
      .then((data) => {
        if (data.token) {
          console.log(data); // доделать!!!!!
          closeAllPopups();
        } else {
          setErrorStatus(data.message);
        }
      })
      .then(() => {
        form.reset(); // сбрасываем инпуты
        inputReset(); // сбрасываем поля валидации
      })
      .catch((err) => {
        console.log('Произошла ошибка: ', err);
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
          errorSubmit={errorStatus}
        />
        <Login
          isOpenLogin={login}
          closeLogin={closeLogin}
          onChageLog={openRegister}
          closePopup={closeAllPopups}
          overlay={overlayClick}
          onSubmit={submitLogin}
          errorSubmit={errorStatus}
        />

        <SuccessRegister
          closeMyself={closeSuccessRegister}
          onChange={openLogin}
          isOpen={successRegister}
          closePopup={closeAllPopups}
          overlay={overlayClick}
        />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
