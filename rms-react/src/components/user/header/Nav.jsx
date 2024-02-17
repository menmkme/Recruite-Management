import React from 'react';

import logo from "../../../assets/images/mdk.jpg";
import { Link } from 'react-router-dom';

const Nav = () => {


  return (
    <>
      <div className='home-header-container-nav'>
        <div className='home-header-container-nav-left'>
        <div className='home-header-container-nav-left__branding'>
          <img src={logo} alt='logo'/>
        </div>
        </div>
        <div className=' home-header-container-nav-right'>
          <Link  to="/" >Home</Link>
          <Link  to="/ratio">Ratio</Link>
          <Link  to="/about">About</Link>
          <Link  to="/contact">Contact</Link>
          <Link  to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
