import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({ ...contact, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/contact/send', contact); // Ensure the correct URL
      console.log('Message sent successfully');
      // Optionally, you can reset the form fields after successful submission
      setContact({
        username: "",
        email: "",
        message: "",
      });
      alert('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message');
    }
  }

  return (
    <div className='contact-container'>
      <div className='left-container'>
        <ul>
          <li><h4>Mobile No.: 0000000000</h4></li>
          <li><h4>Email: Phalane@gmail.com</h4></li>
        </ul>
        <img className='phoneimg' src='./images/phone.jpg' alt='' />
      </div>

      <div className='right-container'>
        <form onSubmit={handleSubmit}>
          <h1 className='contact'>Contact Us</h1><br />
          <div>
            <label htmlFor='username'>Username:</label><br />
            <input type='text' name='username' id='username' placeholder='Enter Your Name' value={contact.username} onChange={handleInput} required autoComplete='off' />
          </div><br />
          <div>
            <label htmlFor='email'>Email:</label><br />
            <input type='email' name='email' id='email' placeholder='Enter Your Email' value={contact.email} onChange={handleInput} required autoComplete='off' />
          </div><br />
          <div>
            <label htmlFor='message'>Message:</label><br />
            <textarea name='message' id='message' placeholder='Write Your Message' value={contact.message} onChange={handleInput} cols='25' rows='9' required></textarea>
          </div>
          <button type='submit' className='contactsubmit'>Submit</button>
        </form>
      </div>

      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.67797417457!2d77.3762586503206!3d28.624681810700586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704772339512!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;
