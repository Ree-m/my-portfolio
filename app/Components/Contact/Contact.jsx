"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/contact.module.css"

const Result=()=>{
  return(
    <div>
      <p>Your message has been sent. I will reply soon.</p>
    </div>
  )
}
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
      e.target.reset()
      setShowResult(true)
  };

  return (
    <div>
      <div>
        <h2>Contact.</h2>
        <p>
          Get in touch or shoot me an email directly on
          <span onClick={() => window.location = 'mailto:reembsrat@gmail.com'}>reembsrat@gmail.com</span>
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send Message" />
      </form>

      <div>
       { showResult ? <Result/>:null}
      </div>
    </div>
  );
};

export default Contact;
