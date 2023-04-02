/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Burger.scss";
import cn from 'classnames';
import { FC, memo } from "react";
import { EmpyLinksList } from "../EmptyLinksList/EmptyLinksList";

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
      <EmpyLinksList names={['Home', 'Features', 'Blog', 'Shop', 'About' ,'Contact']} white size="14"/>
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