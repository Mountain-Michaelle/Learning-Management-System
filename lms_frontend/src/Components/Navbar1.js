import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navbar1.css';
import {Link} from 'react-router-dom';
import CssTutorial from '../css/CSS_Tutorial/CssTutorial';

function Navbar1() {
  return (
    <Navbar className="navbar1"   bg="light" variant="black" expand="lg">
      <Container className="">
        <Navbar.Brand ><Link style={{textDecoration:"none", color:"dark green"}} to="/">IMTech</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:"none"}} to="/about">About</Link></Nav.Link>
            <NavDropdown title="Class" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Teacher
              </NavDropdown.Item>
              <Link to="/css-tutorial"><NavDropdown.Item href="#action/3.3">Css Practice</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Your Attendances
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;