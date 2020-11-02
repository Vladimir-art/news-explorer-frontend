import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation() {
  return (
    <ul className="navigation">
      <NavLink exact to="/" className="navigation__links" activeClassName="navigation__links_hover ">
        Главная
      </NavLink>
      <NavLink to="/saved-news" className="navigation__links" activeClassName="navigation__links_hover ">
        Сохранённые статьи
      </NavLink>
      <li className="navigation__links navigation__links_loggedout ">
        <Link className="navigation__link navigation__link_center">Авторизоваться</Link>
      </li>
      <li className="navigation__links navigation__links_loggedin ">
        <Link className="navigation__link navigation__link_center">Имя</Link>
        <img className="navigation__image" alt="Иконка-выйти" src={logOut} />
      </li>
    </ul>
  );
}

export default Navigation;

// если необходимо изменить цвет ссылок и их выделение, цвет текста, крч (все теги кроме картинки)
// добавь модификатор class_theme-dark
