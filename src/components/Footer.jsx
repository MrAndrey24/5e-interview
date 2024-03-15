import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Styles/Footer.css'

const words = ["The members-only top-tier music supervision platform", "Coming soon", "A hyper-curated sync marketplace with the best labels"]


export default function Footer() {
    const [wordIndex, setWordIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((wordIndex + 1) % words.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [wordIndex])
  return (
    <footer>
        <div className='carousel-container'>
        <p><strong>{
            words[wordIndex]
            }</strong></p>
        </div>
    </footer>
  )
}
