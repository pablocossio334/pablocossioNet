import React from 'react'
import logoJava from '../assets/javaLogo.png'
import pensamientoC from '../assets/cerebro-meditando.gif'
import {Link} from 'react-router-dom';
import bd from '../assets/basedats.gif'
import cs from '../assets/Csh.gif'
import CSS from '../assets/html+css.png'
import Github from '../assets/github.webp'
const pagina1 = () => {
  return (
    <div className='slide'>
<div className="slideCont">
   <h1 className="tituloSlide">MANUALES</h1>
   <div className="iconSlide"><Link   to={'/manual/java'} ><img src={logoJava} alt="" /><div className="iconSlideTitulo">Manual Java</div></Link></div>
   <div className="iconSlide"><img src={pensamientoC} alt="" /><div className="iconSlideTitulo">Pensamiento Computacional</div></div>
   <div className="iconSlide"><img src={bd} alt="" /><div className="iconSlideTitulo">Base de datos</div></div>
   <div className="iconSlide"><img src={cs} alt="" /><div className="iconSlideTitulo">C#</div></div>
   <div className="iconSlide"><img src={CSS} alt="" /><div className="iconSlideTitulo">Desarrollo Web</div></div>
   <div className="iconSlide"><img src={Github} alt="" /><div className="iconSlideTitulo">Github</div></div>
  
</div>


    </div>
  )
}

export default pagina1