import React from 'react';
import img1 from './Assets/portfoliopic.png';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='navbar'>
      <div style={{display:'flex', flexDirection:'row'}}>
        <img src={img1} alt="profile" width={50} height={50} style={{borderRadius:'50%', background:'#31a7b2'}} />
        <h3>Shru<span>ti</span></h3>
      </div>
      <div style={{display:'flex', flexDirection:'row', gap:'2rem'}}>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/projects">Projects</Link></p>
        <p><Link to="/contact">Contact</Link></p>
      </div>
    </div>
  );
};

export default Navbar;