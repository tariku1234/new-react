import "./NavbarStyle.css"

import { FaBars, FaTimes } from "react-icons/fa"
import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"



const Navbar = () => {

   const [click , setclick] = useState(false);
   const handleclick = () => setclick(!click);

   const [color, setColor] = useState(false);
   const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
   }

   window.addEventListener("scroll" , changeColor);
   
   const closeMenu =() => setclick(false)

  return (
    <div className={color ? "header header-bg" : "header"}>
     <Link to="/">
       <h1> portfolio</h1>
     </Link> 

     <ul className= { click ? "nav-menu active" : "nav-menu"}>

       <li> 
           <Link to="/about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>down</Link>
        </li>


        <li> 
           <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/project"}>Project</Link>
        </li>
        <li>
        <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
        <Link to={"/about"}>About</Link>
        </li>  
     </ul>
       <div className="hamburger" onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}} />)}
        
        
        
       </div>
    </div>
  );
}

export default Navbar  