import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/personal.css';

function NavBar({logo}) {
  return (

      <Navbar className="my-navbar-color" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="500"
            height="90"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='my-navbar-button' href="#home">Inicio</Nav.Link>
            <Nav.Link className='my-navbar-button' href="#about">Productos</Nav.Link>
            <Nav.Link className='my-navbar-button' href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default NavBar;
