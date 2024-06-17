import React from 'react';

const Docs = ({ pagina ,color}) => {
  
console.log(color);
  
  return (
    <a href={pagina.link} 
    className={`tema ${color}`}
    target="_blank"
    style={{ backgroundImage: `url(${pagina.imagen})`}}
    >
     
      <div className="numeroTema">TEMA {pagina.index}</div>
      <div className="temaTitulo"> {pagina.titulo}</div>


  </a>
  );
};

export default Docs;
