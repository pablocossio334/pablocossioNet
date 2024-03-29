import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams y useHistory desde React Router
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Error from './Error.jsx'
import MainD from './MainD.jsx';
import Docs from './Docs.jsx';

const DocsContainer = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState(null);
  const [respuesta,setRespuesta]=useState(0);
  const [paginas,setPaginas]=useState(null);
  
  const ordenarPaginas = (paginasD) => {
    const paginasOrdenadas = [...paginasD]; // Crear una copia del arreglo original
    paginasOrdenadas.sort((a, b) => a.index - b.index); // Ordenar el arreglo por el campo 'index'
    setPaginas(paginasOrdenadas); // Actualizar el estado 'paginas' con el arreglo ordenado
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          ordenarPaginas(data.paginas);
          setDatos(data);
          setRespuesta(1);
        } else {
          console.log('No such document!');
        setRespuesta(2)
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        setRespuesta(2)
      }
    };

    fetchData();
  }, [id]);

  if (respuesta==0) {
    return <div className='main'><h1>Loading...</h1></div>;
  }
  else if(respuesta==2)
  return <Error/>//error
  else
  return (
    <div className='main'>
       <div className="mainTemas">
       <h1 className='tituloTemas'>MANUAL DE {datos.titulo}</h1>
       <div className="temas">
      
        {paginas && paginas.map((pagina, index) => (
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
