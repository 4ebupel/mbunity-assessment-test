/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, memo } from "react";
import { EmpyLinksList } from "../EmptyLinksList/EmptyLinksList";
import { MiniForm } from "../MiniForm/MiniForm";
import { TextLink } from "../TextLink/TextLink";
import "./Footer.scss";

export const Footer: FC = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__logo__conatainer">
        <a href="#" className="footer__logo">
          Logo Here
        </a>
      </div>
      {/* wrapper, so elements can be positioned while on PC */}
      <div className="footer__onDesktop">
        {/* group containers for mobile positioning */}
        <div className="footer__group__container">
          <div className="footer__group reach-us">
            <h2 className="footer__group__heading">Reach us</h2>
            <ul className="footer__group">
              <li className="footer__list__item">
                {/* 
                  I've tried to make an scg sprite but haven't successed
                  so I decided not to make a separate component for icon__links        
                 */}
                <a
                  href="tel:+1012 3456 789"
                  className="footer__icon footer__icon-phone"
                ></a>
                {/* 
                  Ordinary links here used for icons
                */}
                <TextLink
                  to="tel:+1012 3456 789"
                  text="+1012 3456 789"
                  white
                  adaptive
                />
              </li>
              <li className="footer__list__item">
                <a
                  href="mailto:demo@gmail.com"
                  className="footer__icon footer__icon-mail"
                ></a>
                <TextLink
                  to="mailto:demo@gmail.com"
                  text="demo@gmail.com"
                  white
                  adaptive
                />
              </li>
              <li className="footer__list__item">
                <a
                  href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6"
                  className="footer__icon footer__icon-geo"
                ></a>
                <TextLink
                  to="https://goo.gl/maps/oD4H5WuzsGLrWrJo6"
                  text="132 Dartmouth Street Boston, Massachusetts 02156 United States"
                  white
                  adaptive
                />
              </li>
            </ul>
          </div>
          <div className="footer__group company">
            <h2 className="footer__group__heading">Company</h2>
            <EmpyLinksList
              names={["About", "Contact", "Blogs"]}
              white
              adaptive
            />
          </div>
        </div>
        <div className="footer__group__container">
          <div className="footer__group">
            <h2 className="footer__group__heading">Legal</h2>
            <EmpyLinksList
              names={[
                "Privacy Policy",
                "Terms & Services",
                "Terms of Use",
                "Refund Policy",
              ]}
              white
              adaptive
            />
          </div>
          <div className="footer__group">
            <h2 className="footer__group__heading">Quick Links</h2>
            <EmpyLinksList
              names={["Techlabz Keybox", "Downloads", "Forum"]}
              white
              adaptive
            />
          </div>
        </div>
        <MiniForm />
      </div>
    </footer>
  );
});
