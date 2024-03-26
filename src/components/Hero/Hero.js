import React from 'react'
import "./Hero.css"
import log2 from "../images/image1.png"
const Hero = () => {
  return (
    <div className='main'>
        <div className='write-up'>
            <p>Hi, there!</p>
            <h1 className='one'> <span className='luxe'>Luxe</span> is here to be your assistance</h1>
            <p className='two'>I am here ready to help you in making creative digital products</p>
            <button className='btn'>Let’s Discuss</button>
        </div>
        <div>
            <img src={log2} alt='log'/>
        </div>
    </div>

  )
}

export default Hero