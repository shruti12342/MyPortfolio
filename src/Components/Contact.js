import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hnzz03i', // e.g. service_xyz123
      'template_7t5v60s', // e.g. template_abc123
      form.current,
      'gXTROaaAiBkRBAsBX'   // e.g. TZaBCDEfgH12iJKl3
    )
    .then((result) => {
      alert('Message Sent Successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };


  return (
     <div className='Firstdiv'>
      <h1 style={{ textAlign: 'center' }}>Contact me</h1>
      <div className='maincontact'>
        <div className='lcontact'>
          <h3>Get in touch</h3>
          <p style={{marginTop:'20px', marginBottom:'30px'}}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. I will be happy to answer your questions and set up a meeting with you.</p>
          <div className='ccontact'>
            <p className="fa"><span style={{marginRight:'10px', fontSize:'larger', color:'#26aab7'}}>&#xf041;</span>Nagpur, Maharashtra, India</p><br/>
            <p><span className="fa fa-phone" style={{marginRight:'10px', color:'#26aab7'}}></span>+91-9607785580</p>
            <p className="fa"><span style={{marginRight:'10px', color: '#26aab7'}}>&#xf0e0;</span>shruti8kamble@gmail.com</p>
          </div>
          <div className='contactF'>
            <p>Connect with me :</p>
            <div className='smicons'>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" class="fa">&#xf09a;</a>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" class="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/shruti.kamble_sk/"class="fa">&#xf16d;</a>
            </div>
          </div>
        </div>
        <div className='rcontact'>
        <form id='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' id='name' name='name' placeholder='Enter your name' required />

          <div className='ep' style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', borderLeft: '0px' }}
              />
            </div>

            <div className="input-container">
              <i className="fa fa-phone"></i>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', borderLeft: '0px', marginRight: '0px' }}
              />
            </div>
          </div>

          <textarea
            id='message'
            name='message'
            placeholder='Write some message here'
            required
          />

          <button type='submit'>Contact Me</button>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
