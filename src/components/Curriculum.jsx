import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Curriculum1 from './Curriculum1.jsx';
import Curriculum2 from './Curriculum2.jsx';


const Curriculum = () => {
  const [num, setNum] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  const paginas = [<Curriculum1/>,<Curriculum2/>]

  const subirP = () => {
    setTransitioning(true); // Comienza la transición
    setTimeout(() => {
      if(num<paginas.length-1)setNum(num + 1);
      setTransitioning(false); // Termina la transición
    }, 500); // Cambia la página después de 500ms
  }

  const bajarP = () => {
    setTransitioning(true); // Comienza la transición
    setTimeout(() => {
      if(num>0)setNum(num - 1);
      setTransitioning(false); // Termina la transición
    }, 500); // Cambia la página después de 500ms
  }
  
  return (
   
    <div className="curriculum">
    
    <div className={`slideC ${transitioning ? 'fade-enter' : 'fade-enter-active'}`}>
      {paginas[num]}
    </div>
    {num > 0 && <button onClick={bajarP} className='botonUPDown'><IoIosArrowUp /></button>}
    {num < paginas.length - 1 && <button onClick={subirP} className='botonUPDown'><IoIosArrowDown /></button>}
  </div>
);
    //<IoIosArrowDown />
  
}

export default Curriculum;