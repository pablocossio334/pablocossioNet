import React from 'react'
import binarios from '../assets/numbers.png';
import bomba from '../assets/bombaBinaria.png';
import hanoi from '../assets/hannoi.png';

const pagina2 = () => {
  return (
    <div className='slide'><div className="slideCont">
  <div className="slideCont">
   <h1 className="tituloSlide">JUEGOS Y APLICACIONES DIDACTICAS</h1>
  <div className="iconSlide iconColor1"><img src={binarios} alt="" /> <div className="iconSlideTitulo">Numeros Binarios</div></div>
  <div className="iconSlide iconColor2"><img src={bomba} alt="" /> <div className="iconSlideTitulo">Bomba Binaria</div></div>
  <div className="iconSlide iconColor3"><img src={hanoi} alt="" /> <div className="iconSlideTitulo">Torres Hannoi</div></div>
 
  


   </div>
  
</div>
</div>
  )
}

export default pagina2