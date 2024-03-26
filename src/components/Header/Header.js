import React from 'react';
import "./Header.css"
import logo from "../images/Luxe.png"
import navbar from "../images/menu.png"


const Header = () => {
  return (
    <header className='navBar'>
        <div className='left'>
            <img src={logo}/> 
        </div>
        <div className='center'>
            <h4>Home</h4>
            <h4>Service</h4>
            <h4>Portfolio</h4>
            <h4>How we work</h4>
        </div>
        <div>
            <img src={navbar}/>
        </div>
    </header>
  )
}

export default Header