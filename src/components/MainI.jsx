import React from 'react'
import MarioB from '../assets/mario-bros.gif'
import Cubo from './Cubo.jsx'
import Cube from '../assets/cube.gif'

const MainI = () => {
  return (
    <div className="mainIzquierda">
        <Cubo/>
        <div className="marioC">
        <img src={MarioB} alt="" />
        </div>
        </div>
  )
}

export default MainI