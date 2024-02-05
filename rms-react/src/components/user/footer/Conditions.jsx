import React from 'react'
import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <div className=''> 
      <h1>Condition</h1>
      <div className="flex flex-column">
        <Link className='pointer black' to="/">Terms & Condition</Link>
        <br />
        <Link className='pointer black' to="/">Privacy</Link>
      </div>
    </div>
  )
}

export default Conditions