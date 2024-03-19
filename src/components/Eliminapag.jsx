import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Eliminapag = ({ manual, pagina }) => {
  const [datos, setDatos] = useState(null);
  const [visible, setVisible] = useState('block');
  const firestore = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(firestore, 'manuales', manual.toLowerCase());
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
  }, [manual, pagina, firestore]);

  const cierraPagina = () => {
    setVisible('none');
  };

  const eliminarPagina = async () => {
    try {
      const docRef = doc(firestore, 'manuales', manual.toLowerCase());
      let newPaginas = datos.paginas.filter(p => p.index !== pagina);
      await updateDoc(docRef, { paginas: newPaginas });
      setDatos(prevDatos => ({
        ...prevDatos,
        paginas: newPaginas
      }));
      setVisible('none');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div className="modal show" style={{ display: visible, position: 'initial' }}>
      <h2> ELIMINA DEL MANUAL {manual}</h2>
      <h2> LA PAGINA {pagina}</h2>
     
      <Modal.Footer>
        <Button variant="danger" onClick={eliminarPagina}>SI</Button>
        <Button variant="primary" onClick={cierraPagina}>NO</Button>
      </Modal.Footer>
    </div>
  );
};

export default Eliminapag;

