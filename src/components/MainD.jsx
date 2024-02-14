import React from 'react'
import Crea from '../assets/CREA.jpg'
import Apuntes from '../assets/apuntes.png'
import CuboAmarillo from '../assets/Cubo-Amarillo.png'
import MarioAnimado from '../assets/mario.gif'//src\assets\mario.gif

const MainD = () => {
  return (
    <div className="mainDerecha">
      <div className="linksD">
      <div className="linkD"><img src={Crea} alt="" /></div>
      <div className="linkD"><img src={Apuntes} alt="" /></div>
      <div className="linkD"><img src={CuboAmarillo} alt="" /></div>
      <div className="linkD"><img src={CuboAmarillo} alt="" /></div>
      
    </div>
    <div className="animaD">

      <img src={<MarioAnimado/>} alt="" />
    </div>
    </div>
  )
}

export default MainD