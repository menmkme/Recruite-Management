import React from 'react';
import { Link } from 'react-router-dom';
import catIcon1 from "../../../assets/images/mdk.jpg"

const masuRai = () => {
  return (
    <div className="death--wrapper__card">
        <div className="death--wrapper__card--left">
        
        <img src={catIcon1} alt="masu_rai-icon" width="100px" height="100px" />
        
        </div>
        <div className="death--wrapper__card--line"></div>
        <div className="death--wrapper__card--right">
        

        <div className="death--wrapper__card--right__part-1">
            <h1>Marigayi</h1>
            <p>Kullu Nafsin Za'Iqatul Maut</p>
            < Link to = "/">Death Date</Link>
        </div>
        <div className="death--wrapper__card--right__part-2">
            <i className='fas fa-book-dead'></i>
        </div>
        </div>
        
    </div>
  )
}

export default masuRai