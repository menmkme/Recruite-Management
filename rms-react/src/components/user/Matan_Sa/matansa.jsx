import React from 'react'
import MatansaItemItem from './matanSaItem'
//import {fetchApiData} from '../../../api/api'

const Matansa = ({matansas}) => {
 
  
  return (
    <section className='category'>
      <div className="category-container">
        <div className="category-container-info">
          <h1 className="category-container-info__heading">
            MADAKI WIFE'S 
          </h1>
          <p className="category-container-info__description">
          </p>
        </div>
        <div className="category-container__card-wrapper">
          
        {
          
    matansas && matansas.map((matansa, index) => (
      <MatansaItemItem
        key={index}
        name={matansa.name}
        state={matansa.state}
        status={matansa.status}
        image={matansa.image}
        description={matansa.description}
        DOB={matansa.DOB}
      />
    ))
      }



          

          {/* <MatansaItemItem /> */}
        </div>
      </div>
    </section>
  )
}

export default Matansa