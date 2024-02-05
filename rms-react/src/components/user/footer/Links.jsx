import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className=''>
      <h1>Quick Links</h1>
      <div className="flex flex-column tc">
        <Link className='pointer black' to="/">About</Link>
        <br />
        <Link className='pointer black' to="/">Support</Link>
        <br />
        <Link className='pointer black' to="/">Contact</Link>
        <br />
      </div>
    </div>
  )
}

export default Links