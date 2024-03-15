import React from 'react'
import '../Styles/Hero.css'
import Cover from '../assets/cover.png'

export default function Hero() {
  return (
    <div className='hero'>
        <h1>The Future Of Music Licensing</h1>
        <div className='cover-image'>
            <img src={Cover} alt="" />
        </div>
    </div>
  )
}
