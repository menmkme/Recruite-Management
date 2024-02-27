import React from 'react';
import { Link } from 'react-router-dom';
//import catIcon1 from "../../../assets/images/j.jpg"

const masuRai = ({name,state,status,image,description,DOB}) => {
    console.log('Masha ALLAH',name)
  return (
    <div className="w-30-l w-40-m w-90 center pa3 pl2 pr2 grow shadow-1 mb2 mt2 inline-flex justify-between masu_rai1--wrapper__card">
      <div className="w-40 flex flex-column justify-around masu_rai1--wrapper__card--left">
        <img src={image} alt="masu_rai-icon" width="100px" height="100px" />
      </div>
      <div className="w-60 tc masu_rai1--wrapper__card--right">
      
        
        <h1>{name}</h1>
        <p>{description}</p> <br />
        <Link to="/" >{status}</Link>
      </div>
    </div>
  )
}

export default masuRai