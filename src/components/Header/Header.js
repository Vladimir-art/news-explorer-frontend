import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <h3 className="header__text">NewsExplorer</h3>
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
    </header>
  );
}

export default Header;
