import React from 'react'
import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <div className='footer__section__container__footer__conditions'> 
      <h1>Condition</h1>
      <div className="flex flex-column footer__section__container__footer__conditions--links">
        <Link  to="/">Terms & Condition</Link>
        
        <Link  to="/">Privacy</Link>
      </div>
    </div>
  )
}

export default Conditions