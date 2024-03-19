import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import Manual from './Manual.jsx';

const ManualContainer = ({manual}) => {
    
    const [item, setItem] = useState(null);
    const [load, setLoad] = useState(true); // Comienza con true para mostrar "Cargando..."
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const oneItem = doc(db, 'manuales', `${manual}`);

        const unsubscribe = onSnapshot(oneItem, (snapshot) => {
            if (snapshot.exists()) {
                const docData = snapshot.data();
                setItem(docData);
                setLoad(false); // Cambia el estado de "load" a false una vez que los datos se han cargado
            } else {
                console.log(manual);
                setError("El documento" +manual+"no existe"); // Establece el error si el documento no existe
                setLoad(false); // Cambia el estado de "load" a false
            }
        }, (error) => {
            console.error("Error fetching document:", error);
            setError("Error al cargar el documento");
            setLoad(false); // Cambia el estado de "load" a false en caso de error
        });

        // Cleanup function to unsubscribe when component unmounts
        return () => unsubscribe();
    }, [manual]); // Re-run effect when "manual" changes

    return (
        <>
       
            
            {/* Muestra el indicador de carga si "load" es true */}
            {load ? <p>Cargando...</p> : (
                error ? <p>{error}</p> : 
                <Manual 
  manual={item ? item.paginas : null}
  titulo={item.titulo} // Asegúrate de pasar titulo como una propiedad
/>
            )}
        </>
    );
}

export default ManualContainer;

