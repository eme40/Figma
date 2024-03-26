import React from 'react'
import "./Footer.css"
import vector from "../images/Vector.png"
import Ui from "../images/Ui Design.png"
import pro from "../images/Product.png"
const Footer = () => {
  return (
    <div>
        <h1 className='first'>Our Service</h1>
    <div className='footer'>
        <div className='ft-left'>       
            <img src={vector} alt='image'/>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='ft-middle'>
            <img src={Ui} alt='Ui-image'/>
            <h3>UI/UX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='ft-right'>
            <img src={pro} alt='Ui-image'/>
            <h3>Product Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer