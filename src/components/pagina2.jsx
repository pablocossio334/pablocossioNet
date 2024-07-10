import React from 'react'
import binarios from '../assets/numbers.png';
import bomba from '../assets/bombaBinaria.png';
import hanoi from '../assets/hannoi.png';

const pagina2 = () => {
  return (
    <div className='slide'><div className="slideCont">
  <div className="slideCont">
   <h1 className="tituloSlide">JUEGOS Y APLICACIONES DIDACTICAS</h1>
  <a className="iconSlide iconColor1" href='https://pablocossio.net/binarios/' target="_blank" ><img src={binarios} alt="" /> <div className="iconSlideTitulo">Numeros Binarios</div></a>
  <a className="iconSlide iconColor2" href='https://bomba-binaria.vercel.app/' target="_blank"><img src={bomba} alt="" /> <div className="iconSlideTitulo">Bomba Binaria</div></a>
  <a className="iconSlide iconColor3" href='https://hannoi-wheat.vercel.app/' target="_blank"><img src={hanoi} alt="" /> <div className="iconSlideTitulo">Torres Hannoi</div></a>
 
  


   </div>
  
</div>
</div>
  )
}

export default pagina2