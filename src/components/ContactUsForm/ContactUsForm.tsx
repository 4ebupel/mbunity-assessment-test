/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-control-regex */
import React, { FC, memo } from "react";
import { Formik, FormikHelpers } from "formik";
import "./ContactUsForm.scss";
import validationSchema from "./validationSchema";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactUsForm: FC = memo(() => {
  // Just to clear form on submit

  const handleSubmit = (
    formData: FormData,
    { resetForm }: FormikHelpers<FormData>
  ) => {
    console.log(formData);

    resetForm();
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "option1",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
        console.log(touched);
        return (
          <form className="contactUsForm" onSubmit={handleSubmit}>
            {/* All __align__container classes used for aligning elements on mobile mostly */}
            <div className="contactUsForm__input__align__container">
              <div className="contactUsForm__input__container">
                <label
                  htmlFor="name"
                  className="contactUsForm__input__label"
                  style={values.firstName ? { color: "#000" } : {}}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="contactUsForm__input"
                  name="firstName"
                  id="name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="contactUsForm__input--error">{errors.firstName && touched.firstName && errors.firstName}</span>
              </div>
              <div className="contactUsForm__input__container">
                <label
                  htmlFor="surname"
                  className="contactUsForm__input__label"
                  style={values.lastName ? { color: "#000" } : {}}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="contactUsForm__input"
                  id="surname"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="contactUsForm__input--error">{errors.lastName && touched.lastName && errors.lastName}</span>
              </div>
            </div>
            <div className="contactUsForm__input__align__container">
              <div className="contactUsForm__input__container">
                <label
                  htmlFor="email"
                  className="contactUsForm__input__label"
                  // Making label black when it isn't empty even without :focus
                  style={values.email ? { color: "#000" } : {}}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="contactUsForm__input"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="contactUsForm__input--error">{errors.email && touched.email && errors.email}</span>
              </div>
              <div className="contactUsForm__input__container">
                <label
                  htmlFor="phoneNum"
                  className="contactUsForm__input__label"
                  style={values.phone ? { color: "#000" } : {}}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="contactUsForm__input"
                  id="phoneNum"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="contactUsForm__input--error">{errors.phone && touched.phone && errors.phone}</span>
              </div>
            </div>
            <div className="contactUsForm__radio">
              <h2 className="contactUsForm__radio_heading">Select Subject?</h2>
              <ul className="contactUsForm__radio__container">
                <li className="contactUsForm__radio__align__container">
                  <div className="contactUsForm__radio__option__container">
                    <input
                      type="radio"
                      name="subject"
                      className="contactUsForm__radio__input"
                      id="option1"
                      value="option1"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="option1"
                      className="contactUsForm__radio__label"
                    >
                      General Inquiry
                    </label>
                  </div>
                  <div className="contactUsForm__radio__option__container">
                    <input
                      type="radio"
                      name="subject"
                      className="contactUsForm__radio__input"
                      id="option2"
                      value="option2"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="option2"
                      className="contactUsForm__radio__label"
                    >
                      General Inquiry
                    </label>
                  </div>
                </li>
                <li className="contactUsForm__radio__align__container">
                  <div className="contactUsForm__radio__option__container">
                    <input
                      type="radio"
                      name="subject"
                      className="contactUsForm__radio__input"
                      id="option3"
                      value="option3"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="option3"
                      className="contactUsForm__radio__label"
                    >
                      General Inquiry
                    </label>
                  </div>
                  <div className="contactUsForm__radio__option__container">
                    <input
                      type="radio"
                      name="subject"
                      className="contactUsForm__radio__input"
                      id="option4"
                      value="option4"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="option4"
                      className="contactUsForm__radio__label"
                    >
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
                style={values.message ? { color: "#000" } : {}}
              >
                Message
              </label>
              <textarea
                value={values.message}
                onChange={handleChange}
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
      }}
    </Formik>
  );
});
