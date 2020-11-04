/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation(props) {

  function onClickAuthorize() {
    props.resetBlackTheme();
    props.isOpenRegister();
  }

  return (
    <ul className="navigation">
      <li className="navigation__links">
        <NavLink exact to="/"
          className="navigation__link"
          activeClassName={`navigation__links_hover ${props.isBlackTheme && `navigation__links_hover_theme-dark`}`}
          onClick={props.resetBlackTheme}
        >
          <p className={`navigation__link ${props.isBlackTheme && `navigation__link_theme-dark`}`}>Главная</p>
        </NavLink>
      </li>
      <li className="navigation__links">
        <NavLink to="/saved-news"
          className="navigation__link"
          activeClassName={`navigation__links_hover ${props.isBlackTheme && `navigation__links_hover_theme-dark`}`}
          onClick={props.onChangeTheme}
        >
          <p
            className={`navigation__link ${props.isBlackTheme && `navigation__link_theme-dark`}`}
          >
            Сохранённые статьи
          </p>
        </NavLink>
      </li>
      <li
        className={`navigation__links navigation__links_loggedout ${props.isBlackTheme && `navigation__links_theme-dark`}`}
        onClick={onClickAuthorize}
      >
        <button
          className={`navigation__link navigation__link_center ${props.isBlackTheme && `navigation__link_theme-dark`}`}
        >
          Авторизоваться
        </button>
      </li>
      <li
        className={`navigation__links navigation__links_loggedout ${props.isBlackTheme && `navigation__links_theme-dark`}`}
        onClick={props.resetBlackTheme}
      >
        <button
          className={`navigation__link navigation__link_center ${props.isBlackTheme && `navigation__link_theme-dark`}`}
        >
          Имя
        </button>
        <img className="navigation__image" alt="Иконка-выйти" src={logOut} />
      </li>
    </ul>
  );
}

export default Navigation;

// если необходимо изменить цвет ссылок и их выделение, цвет текста, крч (все теги кроме картинки)
// добавь модификатор class_theme-dark
