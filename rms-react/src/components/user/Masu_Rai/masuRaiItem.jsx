import React from 'react';
import { Link } from 'react-router-dom';
import catIcon1 from "../../../assets/images/j.jpg"

const masuRai = () => {
  return (
    <div className="">
        <div className="">
        <img src={catIcon1} alt="masu_rai-icon" width="100px" height="100px" />
        
        </div>
        <div className="">
        <h1>Madaki</h1>
        <p>Wannan ne dansa na farko</p>
        <Link to="/" className=''>Yana Zaune a Jos</Link>
        </div>
    </div>
  )
}

export default masuRai