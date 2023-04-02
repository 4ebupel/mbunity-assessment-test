/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, memo } from 'react';
import './InfoBlock.scss';
import { TextLink } from '../TextLink/TextLink';

export const InfoBlock: FC = memo(() => {
  return (
    <div className="infoBlock">
      <div>
        <h2 className="infoBlock__heading">Contact Information</h2>
        <p className="infoBlock__text">
          Say something to start a live chat!
        </p>
      </div>
      <ul className="infoBlock__list">
        <li className="infoBlock__list__item">
          <a
            href="#"
            className="
            infoBlock__icon__link 
            infoBlock__icon__link--phone
          "
          ></a>
          <TextLink to='tel:+1012 3456 789' text='+1012 3456 789' white adaptive/>
        </li>
        <li className="infoBlock__list__item">
          <a
            href="#"
            className="
            infoBlock__icon__link 
            infoBlock__icon__link--mail
          "
          ></a>
          <TextLink to='mailto:demo@gmail.com' text='demo@gmail.com' white adaptive/>
        </li>
        <li className="infoBlock__list__item">
          <a
            href="#"
            className="
            infoBlock__icon__link 
            infoBlock__icon__link--geo"
          ></a>
          <a href="#" className="infoBlock__link">
            132 Dartmouth Street Boston,
            <br />
            Massachusetts 02156 United States
          </a>
        </li>
      </ul>
      <div className="infoBlock__icons__container">
        <a href="#" className="infoBlock__icon">
          <div className="infoBlock__icon--twitter" />
        </a>
        <a href="#" className="infoBlock__icon">
          <div className="infoBlock__icon--instagram" />
        </a>
        <a href="#" className="infoBlock__icon">
          <div className="infoBlock__icon--discord" />
        </a>
      </div>
    </div>
  )
})