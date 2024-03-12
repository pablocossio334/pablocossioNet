import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
const AdminManuales = () => {
  const [user, setUser] = useState(null);
  const { manual } = useParams();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [manual]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null); // Limpiar el estado del usuario después del deslogueo
    }).catch((error) => {
      console.error('Error al desloguear:', error);
    });
  };

  return (
    <div className='main'>
      {user ? (
        <div>
          <p>El usuario {user.email} está logueado</p>
          <button onClick={handleSignOut}>Desloguear</button>
         <h1>el manual es{manual}</h1>
         
        </div>





      ) : (
        <p>No hay usuario logueado</p>
      )}
    </div>
  );
};

export default AdminManuales;
