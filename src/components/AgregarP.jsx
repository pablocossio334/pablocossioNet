import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

const AgregarP = () => {
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState('');
  const [link, setLink] = useState('');
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', 'java');
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
  }, []);

  const agregarPagina = async () => {
    try {
      const newData = {
        imagen: imagen,
        link: link,
        titulo: titulo
      };

      if (datos && Array.isArray(datos.paginas)) {
        const updatedData = { ...datos };
        updatedData.paginas.push(newData);
        setDatos(updatedData);

        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', 'java');
        await updateDoc(docRef, updatedData);

        setTitulo('');
        setImagen('');
        setLink('');

        alert('Página agregada exitosamente');
      } else {
        console.error('Error: datos o paginas no están en el formato esperado');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al agregar la página');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarPagina();
  };

  return (
    <div className="main">
      <div className="agregar">
        <h1>AGREGAR PÁGINA</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          <label htmlFor="imagen">Imagen</label>
          <input type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
          <label htmlFor="link">Enlace</label>
          <input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} required />
          <button type="submit">AGREGAR</button>
        </form>
      </div>
    </div>
  );
};

export default AgregarP;
