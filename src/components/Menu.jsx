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
            <NavDropdown.Item as={Link} to={'/manual/pcomputacional'} >PENSAMIENTO COMPUTACIONAL</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/Csharp'} >C#</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/bd'} >BASE DE DATOS</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/dw'} >DESARROLLO WEB</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/jgithub'} >GitHUB</NavDropdown.Item>
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