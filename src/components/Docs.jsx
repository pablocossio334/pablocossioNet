import React from 'react';

const Docs = ({ pagina }) => {
  
  
  return (
    <a href={pagina.link} className="tema" target="_blank">
    <img src={pagina.imagen} alt="pagina.tema" />
    <p className='temaTitulo'>{pagina.index}-{pagina.titulo}</p>
  </a>
  );
};

export default Docs;
