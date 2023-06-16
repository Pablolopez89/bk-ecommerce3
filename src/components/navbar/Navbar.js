import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function navbar() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Container>
          <Navbar.Brand href="#home">Bamboola Kids</Navbar.Brand>
          <Nav className="me-auto mx-5">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Clientes</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <img
              src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;