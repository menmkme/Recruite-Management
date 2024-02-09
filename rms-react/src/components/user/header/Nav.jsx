import React from 'react';

import logo from "../../../assets/images/logo.jpg";
import { Link } from 'react-router-dom';

const Nav = () => {


  return (
    <>
      <div className='inline-flex justify-between w-100 pa2'>
        <div className='w-10'>
          <img src={logo} alt='logo' className='w-70-m w-50-l' />
        </div>
        <div className='w-60-ns w-80 f4-ns inline-flex justify-between pa2 pr0'>
          <Link className='link w-30 black dim b pointer' to="/">Home</Link>
          <Link className='link w-30 black dim b pointer' to="/ratio">Ratio</Link>
          <Link className='link w-30 black dim b pointer' to="/about">About</Link>
          <Link className='link w-30 black dim b pointer' to="/contact">Contact</Link>
          <Link className='link w-30 black dim b pointer' to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
