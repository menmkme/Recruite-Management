import React from 'react'
import Info from './Info'
import Links from './Links'
import Conditions from './Conditions'
import Subscribe from './Subscribe'

const footer = () => {
  return (
        <footer className='bg-gold pa2 inline-flex-ns justify-between flex flex flex-column-reverse-s items-center-s w-100 footer__section'>
         <div className='tc footer__section__container'>
          <div className='footer__section__container__footer'>
             <Info />
            <Links />
            <Conditions />
            <Subscribe />
          </div>
         </div>
         
        </footer>
  )
}

export default footer