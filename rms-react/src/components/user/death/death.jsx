import React from 'react'
import DeathItem from './deathItem'

const Death = ({yaransas_dead}) => {
  return (
      <div className='w-100 death'>
        <div className='tc container'>
        <div className='death-info'>
          <h1 className=''>Wadan da Suke Rigamu Gidan Gaskiya</h1>
          <p>Su 22 ne suka Rigamu Gidan  Gaskiya acikin yaran Madaki</p>
        </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center mt4 death__wrapper'>
        {

          yaransas_dead && yaransas_dead.map((yaransa, index) => (
            <DeathItem
              key={index}
              name={yaransa.name}
              state={yaransa.state}
              status={yaransa.status}
              image={yaransa.image}
              description={yaransa.description}
              DOB={yaransa.DOB}
              DOD={yaransa.DOD}
            />
          ))
          }
        </div>
      </div>
  )
}

export default Death