import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header header__main-background header_theme-dark">
      <div className="header__info">
        <h3 className="header__text ">NewsExplorer</h3>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

// если необходимо изменить фон header и цвет текста, то добавь модификатор class_theme-dark
