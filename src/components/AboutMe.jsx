import React from 'react'
import Yo from '../assets/yo.jpg'
import Curriculum from './Curriculum.jsx'
import Portfolio from './Portfolio.jsx'

const AboutMe = () => {
  return (
    <div className="main">
      <Portfolio/>
      <div className="ladoDerecho"><h1 className="acerca">ACERCA DE MI</h1>
      <Curriculum/>
      </div>
      
      
    </div>
  )
}

export default AboutMe