import React from 'react'
import { Link } from 'react-router-dom'


const MatansaDetailsItem = ({yaransas, matansas}) => {
    
  return (
    <section className='details_info'>
        <div className='container'>
            <div className='row'>
                <div className='left'>
                    <h1>Assalamu Alaikum</h1>
                    {
                        matansas&& (
                            <div>{matansas.description}</div>
                        )
                    }
                    
                    <Link className='btn' to="/">Karin Bayani</Link>
                </div>
                <div className='right'>
                    <h1>Location</h1>
                    <div className='location-map'>Map will be rendered here</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MatansaDetailsItem