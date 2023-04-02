/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { FC, memo } from "react";
import { useState } from "react";
import "./ContactUsForm.scss";

export const ContactUsForm: FC = memo(() => {
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhoneNum, setFormPhoneNum] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formRadio, setFormRadio] = useState("");

  // Just to clear form on submit
  // I guess in real project this method will create obj
  // from all the states together and send post request to the server

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormName("");
    setFormSurname("");
    setFormEmail("");
    setFormPhoneNum("");
    setFormMessage("");
    setFormRadio("");
  };

  return (
    <form
      action=""
      className="contactUsForm"
      onSubmit={(event) => handleSubmit(event)}
    >
      {/* All __align__container classes used for aligning elements on mobile mostly */}
      <div className="contactUsForm__input__align__container">
        <div className="contactUsForm__input__container">
          <label
            htmlFor="name"
            className="contactUsForm__input__label"
            style={formName ? { color: "#000" } : {}}
          >
            First Name
          </label>
          <input
            type="text"
            className="contactUsForm__input"
            id="name"
            required
            value={formName}
            onChange={(event) => setFormName(event.target.value)}
          />
        </div>
        <div className="contactUsForm__input__container">
          <label
            htmlFor="surname"
            className="contactUsForm__input__label"
            style={formSurname ? { color: "#000" } : {}}
          >
            Last Name
          </label>
          <input
            type="text"
            className="contactUsForm__input"
            id="surname"
            required
            value={formSurname}
            onChange={(event) => setFormSurname(event.target.value)}
          />
        </div>
      </div>
      <div className="contactUsForm__input__align__container">
        <div className="contactUsForm__input__container">
          <label
            htmlFor="email"
            className="contactUsForm__input__label"
            // Making label black when it isn't empty even without :focus
            style={formEmail ? { color: "#000" } : {}}
          >
            Email
          </label>
          <input
            type="email"
            className="contactUsForm__input"
            id="email"
            required
            value={formEmail}
            onChange={(event) => setFormEmail(event.target.value)}
          />
        </div>
        <div className="contactUsForm__input__container">
          <label
            htmlFor="phoneNum"
            className="contactUsForm__input__label"
            style={formPhoneNum ? { color: "#000" } : {}}
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="contactUsForm__input"
            id="phoneNum"
            required
            value={formPhoneNum}
            onChange={(event) => setFormPhoneNum(event.target.value)}
          />
        </div>
      </div>
      <div className="contactUsForm__radio">
        <h2 className="contactUsForm__radio_heading">Select Subject?</h2>
        <ul className="contactUsForm__radio__container">
          <li className="contactUsForm__radio__align__container">
            <div className="contactUsForm__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactUsForm__radio__input"
                id="option1"
                checked={formRadio === "option1"}
                value="option1"
                onChange={(event) => setFormRadio(event.target.value)}
              />
              <label htmlFor="option1" className="contactUsForm__radio__label">
                General Inquiry
              </label>
            </div>
            <div className="contactUsForm__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactUsForm__radio__input"
                id="option2"
                checked={formRadio === "option2"}
                value="option2"
                onChange={(event) => setFormRadio(event.target.value)}
              />
              <label htmlFor="option2" className="contactUsForm__radio__label">
                General Inquiry
              </label>
            </div>
          </li>
          <li className="contactUsForm__radio__align__container">
            <div className="contactUsForm__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactUsForm__radio__input"
                id="option3"
                checked={formRadio === "option3"}
                value="option3"
                onChange={(event) => setFormRadio(event.target.value)}
              />
              <label htmlFor="option3" className="contactUsForm__radio__label">
                General Inquiry
              </label>
            </div>
            <div className="contactUsForm__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactUsForm__radio__input"
                id="option4"
                checked={formRadio === "option4"}
                value="option4"
                onChange={(event) => setFormRadio(event.target.value)}
              />
              <label htmlFor="option4" className="contactUsForm__radio__label">
                General Inquiry
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="contactUsForm__textArea__container">
        <label
          htmlFor="message"
          className="contactUsForm__input__label"
          style={formMessage ? { color: "#000" } : {}}
        >
          Message
        </label>
        <textarea
          value={formMessage}
          onChange={(event) => setFormMessage(event.target.value)}
          name="message"
          id="message"
          className="contactUsForm__textArea"
          maxLength={400}
          placeholder="Write your message.."
        ></textarea>
      </div>
      {/* Additional container so it will be easier to position the letter */}
      <div className="contactUsForm__button--with--letter__container">
        <button type="submit" className="contactUsForm__button">
          Send Message
        </button>
        <div className="contactUsForm__letter" />
      </div>
    </form>
  );
})
