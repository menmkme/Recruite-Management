import React from 'react'
import Nav from './Nav';
import Hero from './Hero';


const Header = ({cmp}) => {



  return <header className='home-header'>
    <div className='home-container'>
      <Nav cmp = {cmp}/>
      <Hero />
    </div>
  </header>
};

export default Header;