import React from 'react'
import { FaCreativeCommons } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
   <div className="footer">
    
    
    <div className="footer-izquierda">CopyRight Pablocossio.net 2024 <FaCreativeCommons /></div>
    <div className="footer-redes"><div className="red"><FaLinkedin/></div> <div className="red git"><FaGithub /></div><div className="red twitter"><BsTwitterX /></div> </div>
    </div>
  )
}

export default Footer