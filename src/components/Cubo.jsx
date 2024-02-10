import React from 'react'
import Java from '../assets/java.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import C from '../assets/csharp.png'
import Js from '../assets/javascript.png'
import Bd from '../assets/bd.jpg'
const Cubo = () => {
  return (
    <div className="cuboContainer">

   
      <div className='cubo'>
           <div className='cara cara1'><img src={Java} alt="" /> </div>
           <div className='cara cara2'><img src={Html} alt="" /></div>
           <div className='cara cara3'><img src={Css} alt="" /></div>
           <div className='cara cara4'><img src={C} alt="" /></div>
           <div className='cara cara5'><img src={Js} alt="" /></div>
           <div className='cara cara6'><img src={Bd} alt="" /></div>
      </div> 
</div> 
  )
}

export default Cubo