import React from 'react'
import CatagoryItem from './CatagoryItem'

const catagory = () => {
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
          <CatagoryItem />
          
        </div>
      </div>
    </section>
  )
}

export default catagory