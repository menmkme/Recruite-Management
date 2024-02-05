import React from 'react'
import MasuRaiItem from './masuRaiItem';

const masuRai = () => {
  return (
    <div className='masu_rai'>
      <div className="container">
        <div className="masu_rai-info">
          <h1 className="masu_rai-info__heading">
            Wadan da Suke a Raye
          </h1>
          <p className='masu_rai-info__des'>Su 9 ne suka rage daga cikin wadan da suka rage acikin yaran Madaki</p>
        </div>
        <div className="masu_rai--wrapper">
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
    </div>
  )
}

export default masuRai