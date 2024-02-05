import React from 'react'
import Info from './Info'
import Links from './Links'
import Conditions from './Conditions'
import Subscribe from './Subscribe'

const footer = () => {
  return (
    <div className='footer__section'>
      <div className='footer__section__container'>
          <div className='footer__section__container__footer'>
            <Info />
            <Links />
            <Conditions />
            <Subscribe />
          </div>
          
      </div>
    </div>
  )
}

export default footer