import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import MainD from './MainD.jsx';
import Docs from './Docs.jsx';

const DocsContainer = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState(null); // Cambiado 0 a null para representar que inicialmente no hay datos
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDatos(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [id]);

  // Evita que se ejecute el console.log si datos es null
  if (!datos) {
    return <div>Loading...</div>;
  }

  // Si datos no es null, renderiza los datos
  return (
    <div className='main'>
       <div className="mainTemas">
       <h1 className='tituloTemas'>MANUAL DE {datos.titulo}</h1>
       <div className="temas">
      
        {datos.paginas.map((pagina, index) => (
          <Docs
          pagina={pagina}
          
          />
        ))}
      
    </div>
       </div>
      
      <MainD />
      
   
    </div>
  );
};

export default DocsContainer;
