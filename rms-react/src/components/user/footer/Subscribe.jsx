import React from 'react'
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className='footer__section__container__footer__subscribe'>
      <h1>Subscribe Now</h1>
      <p>Alhamdulillah</p>
      <form>
        <div className="footer__section__container__footer__subscribe__form">
            <input 
              type="text" 
              className='footer__section__container__footer__subscribe__form'
             
            />
            <button>Subscribe</button>
        </div>
      </form>
      <div className="footer__section__container__footer__subscribe__social-links">
        <Link to="/"><i className='fa fa-facebook'></i></Link>
        <Link to="/"><i className='fa fa-whatsapp'></i></Link>
        <Link to="/"><i className='fa fa-twitter'></i></Link>
      </div>
    </div>
  )
}

export default Subscribe