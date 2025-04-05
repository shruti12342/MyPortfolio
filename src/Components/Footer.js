import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='fcontacts'>
            <h4>CONTACT HERE</h4>
            <p className="fa"><span style={{marginRight:'10px', fontSize:'larger'}}>&#xf041;</span>Nagpur, Maharashtra, India</p><br/>
            <p><span className="fa fa-phone" style={{marginRight:'10px'}}></span>+91-9607785580</p>
            <p className="fa"><span style={{marginRight:'10px'}}>&#xf0e0;</span>shruti8kamble@gmail.com</p>
        </div>
        <div className='fexpertise'>
            <h4>EXPERTISE</h4>
            <p>Full Stack Development</p>
            <p>Problem Solving</p>
        </div>
        <div className='fquicklinks'>
            <h4>QUICK LINKS</h4>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/about'>About</Link></p>
            <p><Link to='/projects'>Projects</Link></p>
            <p><Link to='/contact'>Contact</Link></p>
        </div>
        <div className='fchats'>
            <h4>LET'S CHAT</h4>
            <p>Do you have any query?</p>
            <button className='fbutton'>GET IN TOUCH</button>
            <div className='ficons'>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" className="fa">&#xf09a;</a>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" className="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/shruti.kamble_sk/" className="fa">&#xf16d;</a>
            </div>
        </div>
      </footer>
      <div className='dfooter'>
            <p>&copy; 2025. | Shruti Kamble. |  All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
