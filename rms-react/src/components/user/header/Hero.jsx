import React from 'react'
import heroImage from '../../../assets/images/madaki.JPG'
const Hero = () => {
  return (
    <div className='home-header-container-hero'>
      <div className='home-header-container-hero__left'>
        <div>
          <h1>Madaki's Family</h1>
          <br />
          <h1>Zakari Muhammad</h1>
          <br />
          <p>Shine Madakin Bukuru na farko yana da Mata 4 and ya Haifi yara 31</p>
          <br />
          <div className='inline-flex justify-between pa2 pr3 pl3 ba br-pill w-50-ns w-100'>
            <input
              type='text'
              className='bn outline-0'
              placeholder='Yi Searching Dakinku'
            />
            <span className=''>
              <i className='fa fa-search'></i>
            </span>
          </div>
        </div>
      </div>
      <div className='home-header-container-hero__right'>
        <img src={heroImage} alt='hero' ></img>
      </div>
    </div>
  )
}

export default Hero