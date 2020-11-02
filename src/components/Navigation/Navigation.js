/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation(props) {

  console.log(props.isBlackTheme);
  return (
    <ul className="navigation">
      <NavLink exact to="/"
        className="navigation__links"
        activeClassName={`navigation__links_hover ${props.isBlackTheme && `navigation__links_hover_theme-dark`}`}
      >
        <p className={`navigation__link ${props.isBlackTheme && `navigation__link_theme-dark`}`}>Главная</p>
      </NavLink>
      <NavLink to="/saved-news"
        className="navigation__links"
        activeClassName={`navigation__links_hover ${props.isBlackTheme && `navigation__links_hover_theme-dark`}`}
        onClick={props.onChangeTheme}
      >
        <p
          className={`navigation__link ${props.isBlackTheme && `navigation__link_theme-dark`}`}
        >
          Сохранённые статьи
        </p>
      </NavLink>
      <li
        className={`navigation__links navigation__links_loggedout ${props.isBlackTheme && `navigation__links_theme-dark`}`}
      >
        <button
          className={`navigation__link navigation__link_center ${props.isBlackTheme && `navigation__link_theme-dark`}`}
        >
          Авторизоваться
        </button>
      </li>
      <li
        className={`navigation__links navigation__links_loggedout ${props.isBlackTheme && `navigation__links_theme-dark`}`}
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
