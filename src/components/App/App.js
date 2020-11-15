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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as NewsApi from '../../utils/NewsApi';
import * as MainApi from '../../utils/MainApi';

function App() {

  const [changeTheme, setChangeTheme] = React.useState(false); // стейт для смены темы черная/белая
  const [register, setRegister] = React.useState(false); // стейт для открытия /закрытия регистрации
  const [login, setLogin] = React.useState(false); // открытие/закрытие входа на сайт
  const [searchArticles, setSearchArticles] = React.useState([]); // стейт для записи всех найденных статей
  const [preloader, setPreloader] = React.useState(false); // вкл/откл прелоудера
  const [successRegister, setSuccessRegister] = React.useState(false); // попап после успешной регистрации
  const [errorStatus, setErrorStatus] = React.useState(''); // стейт для отображения ошибки запроса в форме

  const [currentUser, setCurrentUser] = React.useState({}); // глобальный стейт текущего пользователя
  const [loggedIn, setLoggedIn] = React.useState(false); // зашел на страницу или нет
  const [userArticles, setUserrticles] = React.useState([]); //
  // const [isId, setIsId] = React.useState(''); // стейт для получения id карточки и записи в кнопку флажка
  const [isFlag, setIsFlag] = React.useState(false);

  React.useEffect(() => {
    setSearchArticles(JSON.parse(localStorage.getItem('articles')));
    setCurrentUser(JSON.parse(localStorage.getItem('user')));
    localStorage.getItem('jwt') && setLoggedIn(true);
    localStorage.getItem('newArticles') === null && localStorage.setItem('newArticles', JSON.stringify([]));
  }, [])

  // стейт для включения темной темя для шапки сайта
  function changeThemes() {
    setChangeTheme(true); // меняем стейт на темную тему
    MainApi.getContent('articles', localStorage.getItem('jwt'))
      .then((data) => {
        const userArticleArray = [];
        data.forEach((item) => {
          if (item.owner === currentUser.id) {
            userArticleArray.push(item);
          }
        })
        setUserrticles(userArticleArray);
      })
      .catch((err) => console.log('Произошла ошибка: ', err));
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
        setIsFlag(false);
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

  function saveArticle(data, keyword, button) {
    const token = localStorage.getItem('jwt');
    if (loggedIn) {
      MainApi.saveArticles('articles', { keyword, data }, token)
        .then((data) => {
          if (isFlag) {
            const arrayWithFlag = JSON.parse(localStorage.getItem('newArticles')).map((a) => a.url === data.link ? data : a);
            localStorage.setItem('newArticles', JSON.stringify(arrayWithFlag));
            button.id = data._id;
          } else {
            const newArticles = searchArticles.map((article) => (article.url === data.link && data.owner === currentUser.id) ? data : article);
            localStorage.setItem('newArticles', JSON.stringify(newArticles));
            button.id = data._id;
            setIsFlag(true);
          }
        })
        .catch((err) => {
          console.log('Произошла ошибка: ', err);
        })
    } else {
      return;
    }
  }

  function submitRegister(form, inputValues, inputReset) {
    MainApi.register('signup', inputValues)
      .then((data) => {
        if (data.statusCode) {
          setErrorStatus(data.validation.body.message);
        } else {
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

  function submitLogin(form, inputValues, inputReset) {
    MainApi.login('signin', inputValues)
      .then((data) => {
        if (data.token) {
          const token = localStorage.getItem('jwt');
          MainApi.getContent('users/me', token)
            .then((data) => {
              localStorage.setItem('user', JSON.stringify(data));
              setCurrentUser(JSON.parse(localStorage.getItem('user'))); // обновляет информацию текущего пользователя
              setLoggedIn(true); // меняет стейт удачного логина
              closeAllPopups(); // закрывает все попапы
            })
            .catch((err) => console.log('Произошла ошибка: ', err));
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

  function deleteArticle(e, data) {
    const token = localStorage.getItem('jwt');
    let id;
    function returnId() { // если в новом массиве есть эта карточка, то верни ее id
      JSON.parse(localStorage.getItem('newArticles')).some((item) => {
        if (item.link === data.url) {
          id = item._id;
        }
        return id;
      })
    }
    returnId()
    // если нет id на флажке, то получит от ф-ции сверху
    MainApi.deleteArticle(e.id || id, token)
      .then(() => { // перезапишет новый массив, если карточки совпадают, то перезаписать на старую
        const newArr = JSON.parse(localStorage.getItem('newArticles')).map((item) => item.title === data.title ? data : item);
        localStorage.setItem('newArticles', JSON.stringify(newArr));
      })
      .catch((err) => console.log('Произошла ошибка: ', err));
  }

  function deleteSavesNews(data) {
    MainApi.deleteArticle(data._id, localStorage.getItem('jwt'))
      .then(() => {
        const newArticles = userArticles.filter((a) => a._id !== data._id);
        setUserrticles(newArticles);
      })
      .catch((err) => console.log('Произошла ошибка: ', err));
  }

  function onSignOut() {
    setLoggedIn(false);
    // NewsApi.getCommonArticles()
    //   .then((data) => {

    //   })
    setIsFlag(false);
    const newArray = JSON.parse(localStorage.getItem('articles'));
    console.log(newArray);
    localStorage.setItem('newArticles', JSON.stringify(newArray));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          isLoggedIn={loggedIn}
          isChangeTheme={changeTheme} // стейт для вкл/откл темной темы
          onChange={changeThemes} // вкл темной темы
          resetTheme={resetChangeTheme} // откл темной темы
          handleRegister={openRegister}
          close={onSignOut}
        />
        <Switch>
          <Route exact path="/">
            <Main
              submitSearching={handleSubmitSearching}
              isResult={searchArticles}
              isPreloader={preloader}
              onSaveArticle={saveArticle}
              isChangeTheme={changeTheme}
              deleteArticle={deleteArticle}
              isLoggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNews}
            isChangeTheme={changeTheme}
            articles={userArticles}
            isLoggedIn={loggedIn}
            onDeleteArticle={deleteSavesNews}
            openLogin={openLogin}
          />
          {/* <Route path="/saved-news">
            <SavedNews
              isChangeTheme={changeTheme}
              articles={userArticles}
              isLoggedIn={loggedIn}
              onDeleteArticle={deleteSavesNews}
            />
          </Route> */}
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
