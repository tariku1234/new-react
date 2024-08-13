import { Link } from "react-router-dom";
import "./AboutContactStyles.css";

import React from 'react'
import React1 from "../assets/images7.jpeg"
import React2 from "../assets/images9.jpeg"

const AboutContact = () => {
  return (
    <div className="about"> 
      <div className="left">
          <h1>Who Am I</h1>
          <p>Im react front-end developer.icreatr responsible secure website for my client</p>
          <Link to="/contact">
           <button className="btn">Contact</button>
          </Link>

      </div>
      <div className="rignt">
           <div className="img-container">
              <div className="img-stack top">
                 <img src={React1} className="img" alt="true"/>
              </div>
              <div className="img-stack bottom ">
                <img src={React2} className="img" alt="true"/>
              </div>    
           </div>   
           </div>


       
    </div>
  )
}

export default AboutContact