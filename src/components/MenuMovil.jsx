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
            <NavDropdown.Item as={Link} to={'/manual/java'} >JAVA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Acción 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Acción 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separador</NavDropdown.Item>
          </NavDropdown>
  
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
   </div>
   

      
    
  );
}

export default MenuMovil;