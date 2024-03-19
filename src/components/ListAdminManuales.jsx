import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ManualContainer from './ManualContainer';

const ListAdminManuales = () => {
  const [manuales, setManuales] = useState([]);
  const [manual, setManual] = useState(null);
  useEffect(() => {
    const obtenerManuales = async () => {
      try {
        const db = getFirestore();
        const manualesCollection = collection(db, "manuales");
        const manualesSnapshot = await getDocs(manualesCollection);
        const manualesData = manualesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setManuales(manualesData);
      } catch (error) {
        console.error("Error obteniendo manuales:", error);
      }
    };

    obtenerManuales();
  }, []);

  return (
    <div className="main">
      <div className="listaManuales">
        <h1>Lista de manuales</h1>
        <table className='tablaManuales'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Imagen</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {manuales.map(manual => (
              <tr key={manual.id}>
                <td>{manual.id}</td>
                <td>{manual.titulo ? manual.titulo : "Sin título"}</td>
                <td>{manual.imagen ? <img className='imagenManual' src={manual.imagen} alt={manual.id} /> : "Sin imagen" }</td>
                <td><button onClick={() => {setManual(manual.titulo.toLowerCase())}}>Modificar</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <button>Agregar +</button>

        

      </div>

      {manual === null ? <p>Error: No se ha seleccionado ningún manual</p> : <ManualContainer manual={manual}/>}
    </div>
  );
}

export default ListAdminManuales;


