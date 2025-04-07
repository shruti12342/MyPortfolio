import React, { useState, useEffect } from 'react';
import img1 from './Assets/MyProfile1.jpg';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={img1} alt="profile" width={50} height={50} style={{borderRadius:'50%', background:'#31a7b2'}} />
        <h3>Shru<span>ti</span></h3>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <p className={pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </p>
        <p className={pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </p>
        <p className={pathname === "/projects" ? "active" : ""}>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        </p>
        <p className={pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </p>
        <p>
          <a href='https://github.com/shruti12342' target='_blank' className='gitbtn' style={{color:'white'}}>GitHub Profile</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;