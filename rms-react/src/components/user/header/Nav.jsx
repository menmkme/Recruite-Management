import React from 'react'
import logo from "../../../assets/images/logo.jpg"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='home-header-container-nav'>
      <div className='home-header-container-nav-left'>
        <div className='home-header-container-nav-left__branding'>
            <img src={logo} alt='logo' width='75' />
        </div>
      </div>
      <div className='home-header-container-nav-right'>
        <Link className='home-header-container-nav-right--active-menu' to="#">Home</Link>
        <Link to="#">Ratio</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Login</Link>
      </div>
    </div>
  )
}

export default Nav