import React from 'react';
import { Link } from 'react-router-dom';
import catIcon1 from "../../../assets/images/j.jpg"

const masuRai = () => {
  return (
    <div className="w-30-l w-40-m center pa2 grow shadow-1 mb2 mt2 inline-flex justify-between">
      <div className="w-40 flex flex-column justify-around">
        <img src={catIcon1} alt="masu_rai-icon" width="100px" height="100px" />
      </div>
      <div className="w-60 tc">
        <h1>Madaki</h1>
        <p>Wannan ne dansa na farko</p> <br />
        <Link to="/" className='br-pill grow pointer bg-gold link black pa1 pl2 pr2'>Yana Zaune a Jos</Link>
      </div>
    </div>
  )
}

export default masuRai