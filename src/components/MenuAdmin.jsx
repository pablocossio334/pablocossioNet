import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaCircleUser } from "react-icons/fa6";
import { PiBooksDuotone } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import { IoLogOut } from "react-icons/io5";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {Link} from 'react-router-dom';
const MenuAdmin = ({ usuario, setUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null); // Limpiar el estado del usuario después del deslogueo
    }).catch((error) => {
      console.error('Error al desloguear:', error);
    });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [setUser]);

  return (
    <>
      <div className="loginVerde" onClick={handleMenuToggle}>
        <FaCircleUser />
      </div>

      {showMenu && (
        <NavDropdown title={usuario?.email} show={showMenu} alignRight>
          <NavDropdown.Item as={Link} to={'/listaManuales'}><PiBooksDuotone /><span>&nbsp;&nbsp;</span>MANUALES</NavDropdown.Item>
          <NavDropdown.Item><LuUserSquare2 /><span>&nbsp;&nbsp;</span>USUARIOS</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleSignOut}><IoLogOut /><span>&nbsp;&nbsp;</span>LOG OUT</NavDropdown.Item>
        </NavDropdown>
      )}
    </>
  );
};

export default MenuAdmin;
