import { Link } from "react-router-dom";

import "./Header.scss";
import "../../global.scss";

export default function Header() {
  const onToggleMenu = () => {
    const burgerMenu = document.querySelector(".mobMenu__wrapper");
    burgerMenu.classList.toggle("mobMenu__wrapper-active");
  };
  return (
    <>
      <header className="head__container">
        <Link to={`/`}>
          <p className="head__link">Marketplace</p>
        </Link>
        <div className="head__account">
          <img width={20} height={20} src="./images/User.svg" alt="user" />
          <p className="head__account__text">Sign Up</p>
        </div>
      </header>
      <header className="head__mobile">
        <img src="./images/head-mobile-logo.png" alt="logo" />
        <div onClick={onToggleMenu} className="burger">
          <div className="burger__line"></div>
          <div className="burger__line burger__line-long"></div>
          <div className="burger__line"></div>
        </div>
        <div className="mobMenu__wrapper">
          <div onClick={onToggleMenu} className="mobMenu__close">
            <div className="mobMenu__close__line"></div>
            <div className="mobMenu__close__line"></div>
          </div>
          <ul className="mobMenu__list">
            <li className="mobMenu__item">Marketplace</li>
            <div className="mobMenu__btn">
              <img width={20} height={20} src="./images/User.svg" alt="user" />
              <p className="head__account__text">Sign Up</p>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
