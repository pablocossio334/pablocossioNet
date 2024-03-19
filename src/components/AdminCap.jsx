import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import AgregarP from './AgregarP.jsx';

const AdminCap = ({ manual }) => {
  const [datos, setDatos] = useState(null); // Cambiado a null para indicar que los datos están vacíos al principio
  const [mostrarAgregar, setMostrarAgregar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (manual && manual.id) {
          const firestore = getFirestore();
          const docRef = doc(firestore, 'manuales', manual.id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setDatos(data);
          } else {
            console.log('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [manual]);

  const toggleAgregar = () => {
    setMostrarAgregar(!mostrarAgregar);
  };

  return (
    <div className='listaCapitulos'>
      {datos ? ( // Verificar si datos está definido antes de acceder a sus propiedades
        <>
          <h2>Manual de {datos.titulo}</h2>
          <div className="temasManuales">
            <table className='tablaManuales'>
              <thead>
                <tr>
                  <th>Índice</th>
                  <th>Título</th>
                  <th>Imagen</th>
                  <th>url</th>
                  
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {datos.paginas.map((pag, index) => (
                  <tr key={index}>
                    <td>{pag.index}</td>
                    <td>{pag.titulo}</td>
                    <td><img className='imagenManual' src={pag.imagen} alt="" /></td>
                    <td><a href={pag.link} target="_blank">url</a></td>
                   
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
