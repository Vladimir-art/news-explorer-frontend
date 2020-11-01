import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header header__main-background header__main-background_inactive">
      <div className="header__info">
        <div className="header__mobile">
          <h3 className="header__text header__text_theme-dark">NewsExplorer</h3>
          <button className="header__button header__button_active"></button>
        </div>
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;

// если необходимо изменить фон header и цвет текста, то добавь модификатор class_theme-dark  header__main-background_inactive
