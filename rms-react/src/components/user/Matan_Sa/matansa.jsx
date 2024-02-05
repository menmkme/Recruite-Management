import React from 'react'
import MatansaItemItem from './matanSaItem'
//import {fetchApiData} from '../../../api/api'

const Matansa = ({matansas}) => {
 
  
  return (
    <section className=''>
      <div className="">
        <div className="">
          <h1 className="">
            MADAKI WIFE'S 
          </h1>
          <p className="">
          </p>
        </div>
        <div className="">
          
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