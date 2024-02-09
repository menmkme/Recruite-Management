import React from 'react'
import MatansaItemItem from './matanSaItem'
//import {fetchApiData} from '../../../api/api'

const Matansa = ({ matansas }) => {


  return (
    <section className='w-100 mt2 tc'>
      <div className="">
        <div className="">
          <h1 className="gold">
            MADAKI WIVES
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





          <MatansaItemItem />
        </div>
      </div>
    </section>
  )
}

export default Matansa