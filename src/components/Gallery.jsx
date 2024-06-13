import React from 'react'
import PinCard from './PinCard'
import '../Styles/Gallery.css'

const images = [
  { src: '/images/image1.jpg', alt: 'Image 1' },
  { src: '/images/image2.jpg', alt: 'Image 2' },
  { src: '/images/image3.jpg', alt: 'Image 3' }
]

const Gallery = () => (
  <div className='gallery'>
    {images.map((image, index) => (
      <PinCard key={index} src={image.src} alt={image.alt} />
    ))}
  </div>
)

export default Gallery
