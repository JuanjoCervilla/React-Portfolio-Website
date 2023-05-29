import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
 
const Contact = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6homkj', 'template_jmuo269', form.current, 'M2LVEdumj4_tV0JZk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  
  return (
    <section id='contact'> 
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Gmail</h4>
          <h5>jj.cergoma@gmail.com</h5>
          <a href="mailto:jj.cergoma@gmail.com">Send a message</a> 
        </article>
        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Juan José CERVILLA</h5>
          <a href="https://www.linkedin.com/in/juan-cervilla/">View profile</a> 
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send a message</button>
      </form>
    </div>


    </section>
  )
}

export default Contact