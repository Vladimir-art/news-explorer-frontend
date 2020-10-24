import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__mobile">
          <h3 className="header__text">NewsExplorer</h3>
          <button className="header__button"></button>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
