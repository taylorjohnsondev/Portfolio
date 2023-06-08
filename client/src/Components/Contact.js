import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Components/CSS/contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5shp1q8", "template_gwkay9y", form.current, process.env.REACT_APP_EMAILJS_KEY)
      .then(
        (result) => {
          console.log("sent");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name
          <input type="text" name="from_name" required />
        </label>
        <label>
          Email
          <input type="email" name="from_email" required />
        </label>
        <label>
          Message
          <textarea name="message" required />
        </label>
        <input type="submit" value="Send" className="btn"/>
      </form>
    </section>
  );
};

export default Contact;
