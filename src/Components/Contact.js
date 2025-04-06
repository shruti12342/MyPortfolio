import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneInput = form.current['phone'].value;
    if (!/^\d{10}$/.test(phoneInput)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    setIsSending(true);

    emailjs.sendForm(
      'service_hnzz03i',
      'template_7t5v60s',
      form.current,
      'gXTROaaAiBkRBAsBX'
    ).then(() => {
      setShowPopup(true);
      form.current.reset();
      setIsSending(false);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }).catch(() => {
      alert('Failed to send message. Please try again.');
      setIsSending(false);
    });
  };

  return (
    <div className='Firstdiv'>
      <h1 style={{ textAlign: 'center' }} className='contacth1'>Contact me</h1>

      {showPopup && (
        <div className="popup-message">
          Message sent successfully!
        </div>
      )}

      <div className='maincontact'>
        <div className='lcontact'>
          <h3>Connect With Me</h3>
          <p style={{marginTop:'20px', marginBottom:'30px'}}>I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out. I'm always excited to connect, collaborate, and explore new creative opportunities.</p>
          <div className='ccontact'>
            <p className="fa"><span style={{marginRight:'10px', fontSize:'larger', color:'#26aab7'}}>&#xf041;</span>Nagpur, Maharashtra, India</p><br/>
            <p><span className="fa fa-phone" style={{marginRight:'10px', color:'#26aab7'}}></span>+91-9607785580</p>
            <p className="fa"><span style={{marginRight:'10px', color: '#26aab7'}}>&#xf0e0;</span>shruti8kamble@gmail.com</p>
          </div>
          <div className='contactF'>
            <p>Let’s Connect :</p>
            <div className='smicons'>
              <a href="https://www.facebook.com/profile.php?id=100044642193621" target='_blank' class="fa">&#xf09a;</a>
              <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" target='_blank' class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/shruti.kamble_sk/" target='_blank' class="fa">&#xf16d;</a>
            </div>
          </div>
        </div>

        <div className='rcontact'>
          <form id='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Enter your name' required  style={{borderRadius:'5px'}} />

            <div className='ep' style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="input-container" id='emailic'>
                <i className="fa fa-envelope" ></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  style={{ borderLeft: '0px' }}
                  id='contactemail'
                />
              </div>

              <div className="input-container">
                <i className="fa fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  maxLength="10"
                  pattern="\d{10}"
                  title="Phone number must be 10 digits"
                  style={{ borderLeft: '0px', marginRight: '0px' }}
                />
              </div>
            </div>

            <textarea
              name='message'
              placeholder='Write some message here'
              required
              style={{borderRadius:'5px'}}
            />

            <button type='submit' disabled={isSending}>
              {isSending ? 'Sending...' : 'Contact Me'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
