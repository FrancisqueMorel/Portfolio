import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Françisque Morel</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#About">A Propos</Nav.Link>
                  <NavDropdown title="Formation" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#Skills">Compétences</NavDropdown.Item>
                    <NavDropdown.Item href="#Training">Apprentissage</NavDropdown.Item>
                    <NavDropdown.Item href="#Experiences">Expériences</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#Projet1">Projet 1</NavDropdown.Item>
                    <NavDropdown.Item href="#Projet2">Projet 2</NavDropdown.Item>
                    <NavDropdown.Item href="#Projet3">Projet 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#Cv">Curriculum Vitae</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">C.V.</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
}