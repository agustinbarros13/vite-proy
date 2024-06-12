import React from 'react'
import './Styles/PinCard.css'

const PinCard = ({ src, alt }) => (
  <div className='pin-card'>
    <img src={src} alt={alt} className='image' />
  </div>
)

export default PinCard
