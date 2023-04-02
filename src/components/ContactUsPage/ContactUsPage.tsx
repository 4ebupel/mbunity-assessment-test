import { FC, memo } from "react";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm"
import { InfoBlock } from "../InfoBlock/InfoBlock";
import './ContactUsPage.scss';

export const ContactUsPage: FC = memo(() => {
  return (
    <section className="contactUs">
      <h1 className="contactUs__heading">Contact Us</h1>
      <p className="contactUs__text">
        Any question or remarks? Just write us a message!
      </p>
      <section className="contactUs__container">
        {/* 
          I've decided to make InfoBlock into a separate component
          beacuse to my opinion it can be used somewhere else also
          not only here
        */}
        <InfoBlock />
        <ContactUsForm />
      </section>
    </section>
  )
})