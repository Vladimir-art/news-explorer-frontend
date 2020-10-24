import React from 'react';
import { Link } from 'react-router-dom';
import logOut from '../../images/logout.svg';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__links navigation__links_hover">
        <Link className="navigation__link">Главная</Link>
      </li>
      <li className="navigation__links navigation__links_hover">
        <Link className="navigation__link">Сохранённые статьи</Link>
      </li>
      <li className="navigation__links navigation__links_loggedout">
        <Link className="navigation__link">Авторизоваться</Link>
      </li>
      <li className="navigation__links navigation__links_loggedin">
        <Link className="navigation__link">Имя</Link>
        <img className="navigation__image" alt="Иконка-выйти" src={logOut} />
      </li>
    </ul>
  );
}

export default Navigation;
