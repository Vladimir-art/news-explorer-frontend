/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation(props) {

  console.log(props.isBlackTheme);
  return (
    <ul className="navigation">
      <NavLink exact to="/" className="navigation__links" activeClassName="navigation__links_hover ">
        <p className="navigation__link">Главная</p>
      </NavLink>
      <NavLink to="/saved-news" className="navigation__links" activeClassName="navigation__links_hover " onClick={props.onChangeTheme}>
        <p className="navigation__link">Сохранённые статьи</p>
      </NavLink>
      <li className="navigation__links navigation__links_loggedout ">
        <button className="navigation__link navigation__link_center">Авторизоваться</button>
      </li>
      <li className="navigation__links navigation__links_loggedin ">
        <button className="navigation__link navigation__link_center">Имя</button>
        <img className="navigation__image" alt="Иконка-выйти" src={logOut} />
      </li>
    </ul>
  );
}

export default Navigation;

// если необходимо изменить цвет ссылок и их выделение, цвет текста, крч (все теги кроме картинки)
// добавь модификатор class_theme-dark
