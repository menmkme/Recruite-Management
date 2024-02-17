import React from 'react';
import { Link } from 'react-router-dom';
//import catIcon1 from "../../../assets/images/mdk.jpg"

const DeathItem = ({name,state,status,image,description,DOB,DOD}) => {
  return (
    <div className='w-40-ns grow death pa2 ba b--gold inline-flex justify-between ma2 death__wrapper1__card'>
      <div className='br h-75 self-center b--gold flex flex-column justify-around pa2 w-30 death__wrapper1__card--line death__wrapper1__card--left'>
        <img src={image} alt="masu_rai-icon" width="100px" height="100px" />
      </div>
      <div className='pa2 flex flex-column-reverse w-70'>
        <div className='tc death__wrapper1__card-right__part-1'>
          <h1>{name}</h1>
          <p>{description}</p> <br />
          <p>{DOD}</p> <br />
          < Link className={status === "Dead" ? "dead" : null} to="/" >{status}</Link>
        </div>
        <div className='tr death__wrapper1__card-right__part-2'>
          <i className='fas fa-book-dead'></i>
        </div>
      </div>
    </div>
  )
}

export default DeathItem