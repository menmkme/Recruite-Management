import React from 'react';

import logo from "../../../assets/images/mdk.jpg";
import { Link } from 'react-router-dom';

const Nav = ({cmp}) => {


  return (
    <>
      <div className='home-header-container-nav'>
        <div className='home-header-container-nav-left'>
        <div className='home-header-container-nav-left__branding'>
          <img src={logo} alt='logo'/>
        </div>
        </div>
        <div className=' home-header-container-nav-right'>
          <Link className= {`${ cmp === 'home' ? 'home-header-container-nav-right--active-menu' : ''}`} to="/" >Home</Link>
          <Link className= {`${ cmp === 'ratio' ? 'home-header-container-nav-right--active-menu' : ''}`} to="/ratio">Ratio</Link>
          <Link className= {`${ cmp === 'about' ? 'home-header-container-nav-right--active-menu' : ''}`}  to="/about">About</Link>
          <Link className= {`${ cmp === 'contact' ? 'home-header-container-nav-right--active-menu' : ''}`} to="/contact">Contact</Link>
          <Link className= {`${ cmp === 'login' ? 'home-header-container-nav-right--active-menu' : ''}`} to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
