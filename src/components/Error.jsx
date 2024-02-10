import React from 'react'
import Erro from '../assets/error.gif'
import MainI from './MainI.jsx'
import MainD from './MainD.jsx'
const Error = () => {
  return (
    <div className="main">
<MainI/>
<div className="mainCentro">
  
<img src={Erro} alt="" />
<div className="mensajeError">
La Pagina no existe o no se a creado aun
</div>
</div>
        
        <MainD/>
    </div>
  )
}

export default Error