import React from 'react'
import MasuRaiItem from './masuRaiItem';

const masuRai = () => {
  return (
    <div className="flex flex-column mt2 w-100">
      <div className="w-100 tc">
        <h1 className="gold b">
          Wadan da Suke a Raye
        </h1>
        <p className='gold pa2'>Su 9 ne suka rage daga cikin wadan da suka rage acikin yaran Madaki</p>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-100 pa2">
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
        <MasuRaiItem />
      </div>
    </div>
  )
}

export default masuRai