/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [activeMenu, setActiveMenu] = React.useState(false);

  function changeButton(e) {
    if (e.target.classList.contains('header__button')) {
      e.target.classList.toggle('header__button_active');
      setActiveMenu(!activeMenu);
    } else {
      e.target.querySelector('.header__button').classList.toggle('header__button_active');
      setActiveMenu(!activeMenu);
    }
  }

  function setBlackTheme() {
    props.onChange();
  }

  return (
    <header className={`header header__main-background ${activeMenu && `header__main-background_mobile`}`}>
      <div className="header__info">
        <div className="header__mobile">
          <Link exact to="/" className="header__text ">NewsExplorer</Link>
          <button className="header__cover" onClick={changeButton}>
            <div className="header__button "></div>
          </button>
        </div>
        <nav className={`header__nav ${activeMenu && `header__nav_active`}`}>
          <Navigation onChangeTheme={setBlackTheme} isBlackTheme={props.isChangeTheme} />
        </nav>
      </div>
    </header>
  );
}

export default Header;

// если необходимо изменить фон header и цвет текста, то добавь модификатор class_theme-dark  header__main-background_inactive
