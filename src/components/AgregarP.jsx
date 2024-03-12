import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AgregarP = ({ manual }) => {
  const [titulo, setTitulo] = useState('');
  const [numero, setNumero] = useState('1');
  const [imagen, setImagen] = useState('');
  const [link, setLink] = useState('');
  const [datos, setDatos] = useState(null);
  const [visible, setVisible] = useState('block');
  const [numeroExistente, setNumeroExistente] = useState(false);

  useEffect(() => {
    setVisible('block');
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', manual.toLowerCase());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDatos(data);
          console.log(numero);
      
          const paginaExistente = data.paginas.find(pagina => pagina.index === parseInt(numero));
          
          setNumeroExistente(!!paginaExistente); // Utilizamos !! para convertir a booleano
          console.log(numeroExistente);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [manual, numero]);

  const agregarPagina = async () => {
    try {
      if (!numeroExistente) {
        const newData = {
          index: parseInt(numero),
          imagen: imagen,
          link: link,
          titulo: titulo
        };

        const updatedData = { ...datos };
        updatedData.paginas.push(newData);
        setDatos(updatedData);

        const firestore = getFirestore();
        const docRef = doc(firestore, 'manuales', 'java');
        await updateDoc(docRef, updatedData);

        setTitulo('');
        setNumero('');
        setLink('');

        alert('Página agregada exitosamente');
        setVisible('none');
      } else {
        console.error('Error: El número ya existe');
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

  const handleClose = () => {
    setVisible('none');
  };

  return (
    <div
      className="modal show"
      style={{ display: visible, position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="numero">Número</label>
          <input type="number" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} min="0" step="1" required />
          {numeroExistente && <p style={{ color: 'red' }}>¡Error! El número ya existe.</p>}
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} disabled={numeroExistente} required={!numeroExistente} />
          <label htmlFor="imagen">Imagen</label>
          <input type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} disabled={numeroExistente} required={!numeroExistente} />
          <label htmlFor="link">Enlace</label>
          <input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} disabled={numeroExistente} required={!numeroExistente} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit} disabled={numeroExistente}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default AgregarP;
