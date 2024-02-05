import React from 'react';
import { Link } from 'react-router-dom';
import catIcon1 from "../../../assets/images/j.jpg"

const masuRai = () => {
  return (
    <div className="masu_rai--wrapper__card">
        <div className="masu_rai--wrapper__card--left">
        <img src={catIcon1} alt="masu_rai-icon" width="100px" height="100px" />
        
        </div>
        <div className="masu_rai--wrapper__card--right">
        <h1>Madaki</h1>
        <p>Wannan ne dansa na farko</p>
        <Link to="/" className='masu_rai--wrapper__card--right__status'>Yana Zaune a Jos</Link>
        </div>
    </div>
  )
}

export default masuRai