import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../cartWidget/cardWidget';

function navbar() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Bamboola Kids</Navbar.Brand>
          <Nav className="me-auto mx-5">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Clientes</Nav.Link>
          </Nav>
        </Container>
        <CardWidget />
      </Navbar>
    </>
  );
}

export default navbar;