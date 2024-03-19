import React from 'react';
import { useState } from 'react';
import ModalAgregar from './ModalAgregar.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AgregarP from './AgregarP.jsx';
import Eliminapag from './Eliminapag.jsx';
const Manual = ({ manual, setManual ,titulo}) => {
   
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [pagina,setPagina]=useState()
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    
    return (
        <div className='listaCapitulos'>
            {manual ? ( // Verificar si datos está definido antes de acceder a sus propiedades
                <>
                    <div className="temasManuales">
                        <h2>manual de {titulo}</h2>
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
                                {manual.map((pag, index) => (
                                    <tr key={index}>
                                        <td>{pag.index}</td>
                                        <td>{pag.titulo}</td>
                                        <td><img className='imagenManual' src={pag.imagen} alt="" /></td>
                                        <td><a href={pag.link} target="_blank">url</a></td>
                                        <Button variant="danger" onClick={() => { handleShow2(); setPagina(pag.index); }}>
 -
  </Button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        <Button variant="primary" onClick={handleShow}>
      +
        </Button>

        <Modal show={show2} onHide={handleClose2}>
        <Eliminapag
        manual={titulo}
        pagina={pagina}
        
        />
      </Modal>   


    <Modal show={show} onHide={handleClose}>
        <AgregarP
        manual={titulo}/>
    </Modal>   
    
                </>
            ) : (
                <h2>No hay manual seleccionado</h2>
            )}
        </div>
    );
};

export default Manual;
