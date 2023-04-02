/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Burger.scss";
import cn from 'classnames';
import { FC, memo } from "react";

type Props = {
  isVisible: boolean;
}

export const Burger: FC<Props> = memo(({ isVisible }) => {
  return (
    <nav className={cn('burger', {'burger__visible': isVisible})}>
      <div className="burger__header__container">
        <a href="#" className="burger__logo">Logo Here</a>
        <a href="#" className="burger__iconLink"></a>
      </div>
      {/* All links are 'empty', because it's just a test */}
      <ul className="list">
        <li className="list__link">
          <a href="#">Home</a>
        </li>
        <li className="list__link list__link--arrow">
          <a href="#">Features</a>
        </li>
        <li className="list__link">
          <a href="#">Blog</a>
        </li>
        <li className="list__link">
          <a href="#">Shop</a>
        </li>
        <li className="list__link">
          <a href="#">About</a>
        </li>
        <li className="list__link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="burger__footer__container">
        <a href="#" className="burger__circe__link">
          <div className="burger__profile__inner"></div>
        </a>
        <a href="#" className="burger__circe__link">
          <div className="burger__cart__inner"></div>
        </a>
      </div>
    </nav>
  )
})