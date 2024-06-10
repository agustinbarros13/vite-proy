import React from 'react'
import PinCard from './PinCard'
import './Gallery.css'

const pins = [
  { image: 'https://via.placeholder.com/150', description: 'Descripción 1' },
  { image: 'https://via.placeholder.com/150', description: 'Descripción 2' },
  { image: 'https://via.placeholder.com/150', description: 'Descripción 3' }
]

const Gallery = () => {
  return (
    <div className='gallery'>
      {pins.map((pin, index) => (
        <PinCard key={index} image={pin.image} description={pin.description} />
      ))}
    </div>
  )
}

export default Gallery
