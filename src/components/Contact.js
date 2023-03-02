import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import '.././styles/Contact.css';

const Contact = () => {

  return (
    <section className='contact-container'>
      <article className='contact-article'>
        <p>If you need any more information about our services or require a quote, please get in touch with us.</p>
        <div>
        <MdOutlineEmail className='email-logo'/>
          <a className='mailtoui' href='mailto:info@reviverepairs.com'>info@reviverepairs.com</a>
        </div>
        <div>
          <a href='tel:+447917442218'>CALL 07917 442218</a>
        </div>
      </article>
    </section>
  )
}

export default Contact