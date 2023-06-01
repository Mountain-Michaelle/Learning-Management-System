import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navbar1.css';
import {Link} from 'react-router-dom';
import CssTutorial from '../css/CSS_Tutorial/CssTutorial';
import React from 'react';

function Navbar1() {
  return (
    <Navbar className="navbar1" bg="dark" variant="dark" expand="lg">
      <Container className="">
        <Navbar.Brand ><Link style={{textDecoration:"none", color:"blue"}} to="/">IMTech</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:"none"}} to="/about">About</Link></Nav.Link>
            <NavDropdown bg="black" title="Class" variant="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Teacher
              </NavDropdown.Item>
              <Link style={{textDecoration: "none"}} to="/css-tutorial"><NavDropdown.Item href="#action/3.3">Css Practice</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Your Attendances
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link style={{textDecoration: "none"}} to="auth/login">Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{textDecoration: "none"}} to="/auth">Sign Up</Link>
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>   
        </Navbar.Collapse>
      </Container> 
     
    </Navbar>
  );
}

export default Navbar1;