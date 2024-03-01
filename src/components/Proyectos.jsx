import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/yo.jpg';

const Proyectos = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <div className="proyectos">
<h3>MIS PROYECTOS</h3>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       
      </Carousel.Item>
      <Carousel.Item>
       
      </Carousel.Item>

      </Carousel>
    </div>
  )

}

export default Proyectos;