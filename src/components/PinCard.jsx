import React from 'react'
import '../Styles/PinCard.css'

const PinCard = ({ src, alt }) => (
  <div className='pin-card'>
    <img src={src} alt={alt} />
  </div>
)

export default PinCard
