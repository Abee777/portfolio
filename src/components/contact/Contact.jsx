import React from 'react'
import "./contact.css"
import {TfiEmail} from "react-icons/tfi"
import {BsLinkedin} from "react-icons/bs"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_usu349w', 'template_fi1xduu', form.current, 'Yw8PWuRdz68PyOXVM')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vrsalatic@gmail.com</h5>
            <a href="mailto:vrsalatic@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Vladimir Salatić</h5>
            <a href="https://www.linkedin.com/in/vladimir-salatic/" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact