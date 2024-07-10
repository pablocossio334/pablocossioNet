import React from 'react'
import Crea from '../assets/CREA.jpg'
import Apuntes from '../assets/apuntes.png'
import CuboAmarillo from '../assets/Cubo-Amarillo.png'
import marioC from '../assets/pokebola.webp'
import MarioAnimado from '../assets/mario-bros.gif'//src\assets\mario.gif

const MainD = () => {
  return (
    <div className="mainDerecha">
      <div className="linksD">
      <a href='https://estudiantes.ceibal.edu.uy/' className="linkD" target="_blank"><img src={Crea} alt="" /></a>
      <a href='https://losapuntesdemajo.vercel.app/' className="linkD" target="_blank"><img src={Apuntes} alt="" /></a>
      <div className="linkD"><img src={CuboAmarillo} alt="" /></div>
      <div className="linkD"><img src={CuboAmarillo} alt="" /></div>
      
    </div>
  <div className='EspacioPublicitario'><img src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif' alt="" /></div>
   
    </div>
  )
}

export default MainD