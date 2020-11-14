/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [activeMenu, setActiveMenu] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext); //получаем объект о пользвателе из контекста

  function changeButton(e) {
    if (e.target.classList.contains('header__button')) {
      e.target.classList.toggle('header__button_active');
      setActiveMenu(!activeMenu);
    } else {
      e.target.querySelector('.header__button').classList.toggle('header__button_active');
      setActiveMenu(!activeMenu);
    }
  }
  // устанавливаем черную тему для меню
  function setBlackTheme() {
    props.onChange();
  }
  // сбрасываем черную тему
  function resetBlackTheme() {
    props.resetTheme();
  }

  function handleRegisterForm() {
    props.handleRegister();
  }

  return (
    <header
      className={
        `header header__main-background
        ${activeMenu && `header__main-background_mobile`}
        ${props.isChangeTheme && `header__main-background_inactive`}`
      }
    >
      <div className="header__info">
        <div className="header__mobile">
          <Link exact to="/"
            className={`header__text ${props.isChangeTheme && `header__text_theme-dark`}`}
            onClick={props.resetTheme}
          >
            NewsExplorer
          </Link>
          <button className="header__cover" onClick={changeButton}>
            <figure className="header__button "></figure>
          </button>
        </div>
        <nav className={`header__nav ${activeMenu && `header__nav_active`}`}>
          <Navigation
            isLoggedIn={props.isLoggedIn}
            user={currentUser}
            onChangeTheme={setBlackTheme} // вкл темную тему
            isBlackTheme={props.isChangeTheme} // отк/вкл темную тему state
            resetBlackTheme={resetBlackTheme} // откл темную тему
            isOpenRegister={handleRegisterForm}
            close={props.close}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;

// если необходимо изменить фон header и цвет текста, то добавь модификатор class_theme-dark  header__main-background_inactive
