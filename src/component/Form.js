import "./FormStyles.css";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

import React from 'react'

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wp0cypr', 'template_5774clb', form.current, {
        publicKey: 'x5te-rBMKtgFlySTL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="from_email"></input>
            <label>subject</label>
            <input type="text"></input>
            <label>message</label>
           <textarea rows="6" placeholder="type your message here" name="message"/>
           <button className="btn"> SUBMIT</button> 
          
        </form>

    </div>
  )
}

export default Form