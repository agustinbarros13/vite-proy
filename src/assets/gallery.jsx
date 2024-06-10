import React from 'react'

function Gallery() {
  const images = [
    'https://picsum.photos/200',
    'https://source.unsplash.com/random/200x200',
    'https://www.fillmurray.com/200/200',
    'https://www.placecage.com/200/200',
    'https://www.stevensegallery.com/200/200'
  ]

  return (
    <div className='gallery'>
      {}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index}`} />
      ))}
    </div>
  )
}

export default Gallery
