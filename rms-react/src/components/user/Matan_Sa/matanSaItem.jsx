import React from 'react'
//import catIcon1 from "../../../assets/images/j.jpg"

import { Link } from 'react-router-dom'

const matanSaItem = ({name,state,status,image,description,DOB}) => {
  //console.log(name, state, status, image, description, DOB);
  
  return (
    
      
        <div className="category-container__card-wrapper__card">
        
        <img src={image} alt="Catagory-icon" width="100px" height="100px" />
        <Link to="#"><h1>{name}</h1></Link>
        <h3>{state}</h3>
        <h3>{status}</h3>
        <h3>{DOB}</h3>
        <p>{description}</p>
        
    
        
      </div>
     
  )
}

export default matanSaItem