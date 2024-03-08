import React, { useState } from 'react';

import { FaCircleUser } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importamos los métodos de autenticación necesarios desde firebase/auth
const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const auth = getAuth(); // Obtenemos la instancia de autenticación
        await signInWithEmailAndPassword(auth, email, password); // Intentamos iniciar sesión con el email y la contraseña proporcionados
        setError(''); // Limpiamos cualquier mensaje de error previo
        handleClose(); // Cerramos el modal si el inicio de sesión es exitoso
        alert('Inicio de sesión exitoso'); // Mostramos un mensaje de éxito
    } catch (error) {
        setError('Error al iniciar sesión. Verifica tus credenciales.'); // Actualizamos el estado del error si hubo un problema con el inicio de sesión
    }
};
    



  return (
    <>
    <div className="login" onClick={handleShow}><FaCircleUser /></div>

    <Modal show={show} onHide={handleClose} animation={true}>
        <div className="loginUser">
            <h1>LOGIN USUARIO</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="inputEmail">Correo electrónico</Form.Label>
                <Form.Control
                    type="email"
                    id="inputEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="buttons">
                    <Button variant="success" type="submit"><FaCheck /> </Button>{' '}
                    <Button variant="danger" onClick={handleClose}><MdClose /></Button>{' '}
                </div>
            </Form>
        </div>
    </Modal>
</>
  )
}

export default Login