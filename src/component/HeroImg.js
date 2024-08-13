import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import React from 'react'
import IntroImg from "../assets/images.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
         <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1> REACT DEVELOPER</h1>  
        
           <div >
            <Link to="/project" className="btn">project
            </Link>
            <Link to="/contact" className="btn-lignt" >contact</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg
