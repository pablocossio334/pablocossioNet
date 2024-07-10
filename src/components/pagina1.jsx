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
  <div className="iconSlide iconColor1"><Link   to={'/manual/java'} ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="" /><div className="iconSlideTitulo">Manual Java</div></Link></div>
  <div className="iconSlide iconColor2"><Link   to={'/manual/pcomputacional'} ><img src={pensamientoC} alt="" /><div className="iconSlideTitulo">Pensamiento Computacional</div></Link></div>
  <div className="iconSlide iconColor3"><Link   to={'/manual/bd'} ><img src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" alt="" /><div className="iconSlideTitulo">Base de datos</div></Link></div>
  <div className="iconSlide iconColor4"><Link   to={'/manual/csharp'} ><img src="https://upload.wikimedia.org/wikipedia/commons/1/17/C_Sharp_Icon.png" alt="" /><div className="iconSlideTitulo">C#</div></Link></div>
  <div className="iconSlide iconColor5"><Link   to={'/manual/dw'} ><img src={CSS} alt="" /><div className="iconSlideTitulo">Desarrollo web</div></Link></div>
  <div className="iconSlide  iconColor1"><Link   to={'/manual/jgithub'} ><img src={Github} alt="" /><div className="iconSlideTitulo">Github</div></Link></div>
   
  
</div>


    </div>
  )
}

export default pagina1