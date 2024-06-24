import logo from '../assets/logo.svg'
import ham from '../assets/icon-hamburger.svg'
import React, { useState } from 'react';

const NavB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav>
    <div className='na'>
        <img className='navy' onClick={toggleNav} src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
        <img className='naim'/>
      <div className='nav-down'>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </nav>
  )

export default Navbar
