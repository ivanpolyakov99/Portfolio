import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelegram} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ivan.polyakovgds@gmail.com</h5>
            <a href="mailto:ivan.polyakovgds@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@aiven99</h5>
            <a href="https://t.me/aiven99" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>VK</h4>
            <h5>Aiven Polyakov</h5>
            <a href="https://vk.com/id96341127" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact