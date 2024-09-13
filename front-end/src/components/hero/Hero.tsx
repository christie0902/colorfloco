import React from 'react'
import { Container,Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img className="hero-title" src="\hero_element.png" alt="hero-title" />
      <Button className='hero-btn rounded-5' href="#shop">Shop Now</Button>
    </div>
  )
}

export default Hero