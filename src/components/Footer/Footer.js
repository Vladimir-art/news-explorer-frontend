import React from 'react'
import github from '../../images/github-icon.svg';
import facebook from '../../images/facebook-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cover">
        <address className="footer__author">&copy; 2020 Vladimir Ermolaev, Powered by News API</address>
        <div className="footer__sources">
          <ul className="footer__list">
            <li className="footer__links">
              <a className="footer__link" href="#">Главная</a>
            </li>
            <li className="footer__links">
              <a className="footer__link" href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__links">
              <a className="footer__link" href="https://github.com/Vladimir-art">
                <img className="footer__icon" alt="GitHub" src={github} />
              </a>
            </li>
            <li className="footer__links">
              <a className="footer__link" href="#">
                <img className="footer__icon" alt="Facebook" src={facebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
