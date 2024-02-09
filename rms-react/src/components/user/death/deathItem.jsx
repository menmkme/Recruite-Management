import React from 'react';
import { Link } from 'react-router-dom';
import catIcon1 from "../../../assets/images/mdk.jpg"

const DeathItem = () => {
  return (
    <div className="w-40-ns grow death pa2 ba b--gold inline-flex justify-between ma2">
      <div className="br h-75 self-center b--gold flex flex-column justify-around pa2 w-30">
        <img src={catIcon1} alt="masu_rai-icon" width="100px" height="100px" />
      </div>
      <div className="pa2 flex flex-column-reverse w-70">
        <div className="tc">
          <h1>Marigayi</h1>
          <p>Kullu Nafsin Za'Iqatul Maut</p> <br />
          < Link to="/" className="br-pill grow pa2 pl3 pr3 link bg-gold white">Death Date</Link>
        </div>
        <div className="tr">
          <i className='fas fa-book-dead'></i>
        </div>
      </div>
    </div>
  )
}

export default DeathItem