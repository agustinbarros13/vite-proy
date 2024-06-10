import React from 'react'
import { FaPinterest } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <FaPinterest className='header-icon' />
      <h1>Pinterest Clone</h1>
    </header>
  )
}

export default Header
