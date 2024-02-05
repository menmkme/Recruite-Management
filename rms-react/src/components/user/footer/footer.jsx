import React from 'react'
import Info from './Info'
import Links from './Links'
import Conditions from './Conditions'
import Subscribe from './Subscribe'

const footer = () => {
  return (
        <footer className='bg-gold pa2 inline-flex-ns justify-between flex flex flex-column-reverse-s items-center-s w-100'>
          <Info />
          <Links />
          <Conditions />
          <Subscribe />
        </footer>
  )
}

export default footer