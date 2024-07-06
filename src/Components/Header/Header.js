import React from 'react'
import "./Header.css"
import logo from "./popcorn.png"
import logo1 from "./movie.png"
const Header = () => {
    return  <div className="header" onClick={()=>window.scroll(0,0)}>
    <img id="logo" src={logo1} alt="logo"/>
      Sadda Adda
    <img id="logo" src={logo} alt="logo"/> </div>
               
          
  
}

export default Header
