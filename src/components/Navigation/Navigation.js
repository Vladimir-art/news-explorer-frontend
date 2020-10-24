import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <ul className="header__list">
        <li className="header__links">
          <Link className="header__link">Главная</Link>
        </li>
        <li className="header__links">
          <Link className="header__link">Сохранённые статьи</Link>
        </li>
        <li className="header__links header__links_logged">
          <Link className="header__link">Авторизоваться</Link>
        </li>
      </ul>
  );
}

export default Navigation;
