import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { MdMenu } from "react-icons/md";

function MenuMovil() {
  return (
   <div className="menuMovil">
 <Navbar >
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          
          <NavDropdown title={<MdMenu />} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={'/'} >INICIO</NavDropdown.Item>
           <NavDropdown.Item as={Link} to={'/manual/java'} >JAVA</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/pcomputacional'} >PENSAMIENTO COMPUTACIONAL</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/Csharp'} >C#</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/bd'} >BASE DE DATOS</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/dw'} >DESARROLLO WEB</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={'/manual/jgithub'} >GitHUB</NavDropdown.Item>
          </NavDropdown>
  
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
   </div>
   

      
    
  );
}

export default MenuMovil;