import React from 'react'
import heroImage from '../../../assets/images/madaki.JPG'
const Hero = () => {
  return (
    <div className='home-header-container-hero'>
      <div className='home-header-container-hero__left'>
        <h1>Madaki's Family</h1>
        <h1>Zakari Muhammad</h1>
        <p>Shine Madakin Bukuru na farko yana da Mata 4 and ya Haifi yara 31</p>

        <div className='home-header-container-hero__left-seach'>
          <input
            type='text'
            className='home-header-container-hero__left-seach-form'
            placeholder='Yi Searching Dakinku'
            />
            <span className='home-header-container-hero__left-seach-form--search-btn'>
              <i className='fa fa-search'></i>
              </span>
        </div>
      </div>
      <div className='home-header-container-hero__right'>
        <img src={heroImage} alt='hero' ></img>
      </div>
    </div> 
  )
}

export default Hero