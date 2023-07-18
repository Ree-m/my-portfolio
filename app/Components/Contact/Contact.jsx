"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Stars from "../Stars";
import styles from "../../styles/contact.module.css";

const Result = () => {
  return (
    <div>
      <p>Your message has been sent. I will reply soon.</p>
    </div>
  );
};
const Contact = () => {
  const form = useRef();
  const [showResult, setShowResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b5ftckc",
        "template_w54t4o3",
        form.current,
        "ZwpoLoeZxXZ32H-EH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowResult(true);
  };

  return (
    <div className={styles.contact}>
      <Stars />
      <div className={styles.contactConatiner}>
        <div className={styles.text}>
          <h2>Contact.</h2>
          <p>
            Get in touch or shoot me an email directly on{" "}
            <span
              onClick={() => (window.location = "mailto:reembsrat@gmail.com")}
            >
              reembsrat@gmail.com
            </span>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="user_name" placeholder="Name" className={styles.input} />
          <input type="email" name="user_email" placeholder="Email" className={styles.input}/>
          <textarea name="message" placeholder="Message" className={styles.input} />
          <input type="submit" value="Send Message" className={styles.btn} />
        </form>

        <div>{showResult ? <Result /> : null}</div>
      </div>
    </div>
  );
};

export default Contact;
