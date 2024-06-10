import React from 'react'
import Gallery from './gallery'
import Icon from './icon'

function Main() {
  return (
    <div>
      <h1>Mi Galería de Imágenes</h1>
      <Gallery /> {/* Usamos el componente Gallery */}
      <Icon /> {/* Usamos el componente Icon */}
    </div>
  )
}

export default Main
