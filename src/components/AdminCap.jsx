import React, { useState, useEffect } from 'react';
import AgregarP from './AgregarP.jsx'

const AdminCap = ({ manual }) => {
  const [mostrarAgregar, setMostrarAgregar] = useState(false);
  useEffect(() => {
    console.log(manual.id);
  }, []);
  const toggleAgregar = () => {
    setMostrarAgregar(!mostrarAgregar);
  };

  return (
    <div className='listaCapitulos'>
      {manual ? (
        <>
          <h2>Manual de {manual.titulo}</h2>
          <div className="temasManuales">
            <table className='tablaManuales'>
              <thead>
                <tr>
                  <th>Índice</th>
                  <th>Título</th>
                  <th>Imagen</th>
                  <th>url</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {manual.paginas.map((pag, index) => (
                  <tr key={index}>
                    <td>{pag.index}</td>
                    <td>{pag.titulo}</td>
                    <td><img className='imagenManual' src={pag.imagen} alt="" /></td>
                    <td><a href={pag.link} target="_blank">url</a></td>
                    <td><button>editar</button></td>
                    <td><button>eliminar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={toggleAgregar}>Agregar +</button>
          {mostrarAgregar && <AgregarP manual={manual.titulo} />}
        </>
      ) : (
        <h2>No hay manual seleccionado</h2>
      )}
    </div>
  );
};

export default AdminCap;
