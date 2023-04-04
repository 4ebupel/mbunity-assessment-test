import React, { FC, memo } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import "./ContactUsForm.scss";
import validationSchema from "./validationSchema";
import { FormikInput } from "./FormikInput";
import { FormikRadio } from "./FormikRadio";
import { FormikTextArea } from "./FormikTextArea";

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
      {() => {
        return (
          <Form className="contactUsForm" >
            {/* All __align__container classes used for aligning elements on mobile mostly */}
            <div className="contactUsForm__input__align__container">
              {/* Custom components to make code shorter */}
              <FormikInput name="firstName" label="First Name" />

              <FormikInput name="lastName" label="Last Name" />
            </div>
            <div className="contactUsForm__input__align__container">
              <FormikInput name="email" label="Email" />
              
              <FormikInput name="phone" label="Phone Number" />
            </div>
            <div className="contactUsForm__radio">
              <h2 className="contactUsForm__radio_heading">Select Subject?</h2>
              <ul className="contactUsForm__radio__container">
                <li className="contactUsForm__radio__align__container">
                  <FormikRadio name="subject" value="option1" label="General Inquiry"/>
                  
                  <FormikRadio name="subject" value="option2" label="General Inquiry"/>
                </li>

                <li className="contactUsForm__radio__align__container">
                  <FormikRadio name="subject" value="option3" label="General Inquiry"/>
                  
                  <FormikRadio name="subject" value="option4" label="General Inquiry"/>
                </li>
              </ul>
            </div>
            <FormikTextArea 
              name="message" 
              placeHolder="Write your message.."
              label="Message"
              maxLength={400}
            />
            {/* Additional container so it will be easier to position the letter */}
            <div className="contactUsForm__button--with--letter__container">
              <button type="submit" className="contactUsForm__button">
                Send Message
              </button>
              <div className="contactUsForm__letter" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});
