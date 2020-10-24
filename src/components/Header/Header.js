import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <h3 className="header__text">NewsExplorer</h3>
      <Navigation />
    </header>
  );
}

export default Header;
