import React, { FC, memo } from 'react';
import { useState } from 'react';
import './MiniForm.scss';

export const MiniForm: FC = memo(() => {
  // In bigger project I'd named this like "miniFormEmail" or smth like that
  const [email, setEmail] = useState('');

  return (
    // I'm not using any actions because in a nutshell this form is doing nothing
    // and I decided not to make any handleSubmit callbacks 'cause there are not much to do 
    <form action="" onSubmit={event => {event.preventDefault(); setEmail('')}} className="miniForm">
      <h2 className="miniForm__heading">Join Our Newsletter</h2>
      <div className="miniForm__input__container">
        <input 
          type="email" 
          placeholder='Your email address' 
          className="miniForm__input"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type='submit' className="miniForm__btn" >
          Subscribe
        </button>
      </div>
      <p className="miniForm__text">
        *Will send you weekly updates for your better tool management.
      </p>
    </form>
  )
})
