import React from 'react'
import './PinCard.css'

const PinCard = ({ image, description }) => {
  return (
    <div className='pin-card'>
      <img src={image} alt={description} className='pin-card-image' />
      <p className='pin-card-description'>{description}</p>
    </div>
  )
}

export default PinCard
