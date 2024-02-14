import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AboutMe from './AboutMe';
const Menu = () => {
  return (
   <div className="menuComun">
<Navbar>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link}   to={'/'} >Inicio</Nav.Link>
          
          <NavDropdown title="MANUALES" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={'/manual/java'} >JAVA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Acción 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Acción 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separador</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
      <Nav.Link as={Link} to={'/inet'}>MATERIAL INET</Nav.Link>
      <Nav.Link as={Link} to={'/AboutMe'}>ACERCA DE MI</Nav.Link>
    </Navbar>
   </div>
   
   
  );
};

export default Menu;