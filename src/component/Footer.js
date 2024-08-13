 import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

 import React from 'react'
 
 const Footer = () => {
   return (
     <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    <div>
                        <p>addiss ababa </p>
                        <p>ethiopia</p>
                    </div> 
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    +251-9611-413-61</h4>  
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    tarikunegash447@gmail.com</h4>  
                </div>
            </div>
            <div className="right">
               <h4>About the company</h4>
               <p>this is Tariku Negash,CEO and Founder of Thech1. I enjoy discusing new projects and design c.hallenges.

               </p>
               <div className="social">
                <FaFacebook size={30} style={{color:"#fff" , marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color:"#fff" , marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff" , marginRight: "1rem"}} />

               </div> 
            </div>
        </div>
     </div>
   )
 }
 
 export default Footer