/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, memo } from "react";
import { TextLink } from "../TextLink/TextLink";
import "./Header.scss";

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="header__container">
        <a href="#" className="header__logo">
          Logo Here
        </a>
        <a href="#menu" className="header__iconLink"></a>
        {/* The whole navigation is unvisible when on mobile */}
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__list__item">
              <TextLink to="#" text="Home" responsive />
            </li>
            <li className="header__list__item">
              <TextLink to="#" text="Features" responsive />
              <span className="header__link--arrow" />
            </li>
            <li className="header__list__item">
              <TextLink to="#" text="Blog" responsive />
            </li>
            <li className="header__list__item">
              <TextLink to="#" text="Shop" responsive />
            </li>
            <li className="header__list__item">
              <TextLink to="#" text="About" responsive />
            </li>
            <li className="header__list__item">
              <TextLink to="#" text="Contact" responsive />
            </li>
          </ul>
          <div className="header__icon__links__container">
            <a href="#" className="header__icon__link__container">
              <div className="header__icon__link header__icon__link--profile"></div>
            </a>
            <a href="#" className="header__icon__link__container">
              <div className="header__icon__link header__icon__link--cart"></div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
})
