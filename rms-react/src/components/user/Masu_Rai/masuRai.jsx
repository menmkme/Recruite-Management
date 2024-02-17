import React from 'react'
import MasuRaiItem from './masuRaiItem';

const masuRai = ({yaransas_alive}) => {
  return (
    <div className="flex flex-column mt2 w-100 masu_rai">
      <div className="w-100 tc container masu_rai-info">
      <div className="masu_rai-info">
        <h1 className="gold b">
          Wadan da Suke a Raye
        </h1>
        <p>Su 9 ne suka rage daga cikin wadan da suka rage acikin yaran Madaki</p>
      </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-100 pa2 masu_rai--wrapper">
      {

          yaransas_alive && yaransas_alive.map((yaransa, index) => (
            <MasuRaiItem
             key={index}
             name={yaransa.name}
             state={yaransa.state}
             status={yaransa.status}
             image={yaransa.image}
             description={yaransa.description}
             DOB={yaransa.DOB}
            />
          ))
          }
      </div>
    </div>
  )
}

export default masuRai