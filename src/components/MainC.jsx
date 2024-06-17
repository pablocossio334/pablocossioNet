import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Pagina1 from "./pagina1.jsx";
import Pagina2 from "./pagina2.jsx";
import Pagina3 from "./pagina3.jsx";

const MainC = () => {
  const [pagina, setPagina] = useState(0);
  const paginas = [<Pagina1 />,<Pagina2/>];//, <Pagina2 />, <Pagina3 />

  return (
    <div className='mainICentro'>
      <Carousel className='carousel'>
        {paginas.map((paginaA, index) => (
          <Carousel.Item key={index} className='carouselItem'>
            {paginaA}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MainC;
