import React from 'react'
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className=''>
      <h1>Subscribe Now</h1>
      <p>Alhamdulillah</p>
      <form>
        <div className="inline-flex justify-between br-pill ba ma2 bg-light-gray">
          <input
            type="text"
            className='bn outline-0 bg-transparent'
          />
          <button className='bn outline-0 pa2 pointer' style={{ borderTopRightRadius: '18px', borderBottomRightRadius: '18px' }}>Subscribe</button>
        </div>
      </form>
      <div className="w-100 inline-flex justify-around">
        <Link to="/"><i className='fa fa-facebook'></i></Link>
        <Link to="/"><i className='fa fa-whatsapp'></i></Link>
        <Link to="/"><i className='fa fa-twitter'></i></Link>
      </div>
    </div>
  )
}

export default Subscribe