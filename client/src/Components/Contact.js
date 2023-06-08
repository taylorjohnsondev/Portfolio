import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Components/CSS/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5shp1q8",
        "template_gwkay9y",
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!"); // Display success toast
          console.log("sent");
        },
        (error) => {
          toast.error("Error sending email!"); // Display error toast
          console.log(error);
        }
      );
  };

  return (
    <section id="contact">
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
        <input type="submit" value="Send" className="btn" />
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
