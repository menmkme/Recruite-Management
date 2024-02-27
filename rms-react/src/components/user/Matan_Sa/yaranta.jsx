import React from 'react'
import YarantaItem from './yarantaItems';

const yaranta = ({yaransas}) => {
    
  return (
    <div className="flex flex-column mt2 w-100 masu_rai">
      <div className="w-100 tc container masu_rai-info">
      <div className="masu_rai-info">
        <h1 className="gold b">
          Yaran data Haifa
        </h1>
        <p>Ta Haifi adadin yara .....</p>
      </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-100 pa2 masu_rai--wrapper">
        {
            
      yaransas && yaransas.map((yaransa, index) => (
            <YarantaItem
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

export default yaranta