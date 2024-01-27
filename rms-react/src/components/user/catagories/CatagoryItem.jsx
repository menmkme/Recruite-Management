import React from 'react'
import catIcon1 from "../../../assets/images/j.jpg"
import catIcon2 from "../../../assets/images/bg.jpg"
import catIcon3 from "../../../assets/images/sh1.jpg"
import catIcon4 from "../../../assets/images/fc.jpg"
import { Link } from 'react-router-dom'

const CatagoryItem = () => {
  return (
    
      <div className="category-container__card-wrapper__card">
        <div className="category-container__card-wrapper">
        <div>
        <img src={catIcon1} alt="Catagory-icon" width="100px" height="100px" />
        <Link to="#"><h1>Khatume (Atiye)</h1></Link>
        <p>1</p>
        </div>
        
        <div>
        <img src={catIcon2} alt="category-icon" width="100px" height="100px" />
        <Link to="#"><h1>Aisha (Aunty B)</h1></Link>
        <p>2</p>
        </div>
        <div>
        <img src={catIcon3} alt="category-icon" width="100px" height="100px" />
        <Link to="#"><h1>Aisha (Shatu)</h1></Link>
        <p>3</p>
        </div>
        <div>
        <img src={catIcon4} alt="category-icon" width="100px" height="100px" />
        <Link to="#"><h1>Habiba (Mamama)</h1></Link>
        <p>4</p>
        </div>
        </div>
      </div>
   
  )
}

export default CatagoryItem