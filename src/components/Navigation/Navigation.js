import React from 'react';
import { Link } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__links navigation__links_hover navigation__links_hover_theme-dark">
        <Link className="navigation__link navigation__link_theme-dark">Главная</Link>
      </li>
      <li className="navigation__links navigation__links_hover navigation__links_hover_theme-dark">
        <Link className="navigation__link navigation__link_theme-dark">Сохранённые статьи</Link>
      </li>
      <li className="navigation__links navigation__links_loggedout navigation__links_theme-dark">
        <Link className="navigation__link navigation__link_theme-dark">Авторизоваться</Link>
      </li>
      <li className="navigation__links navigation__links_loggedin navigation__links_theme-dark">
        <Link className="navigation__link navigation__link_theme-dark">Имя</Link>
        <img className="navigation__image" alt="Иконка-выйти" src={logOut} />
      </li>
    </ul>
  );
}

export default Navigation;
