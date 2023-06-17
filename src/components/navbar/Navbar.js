import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';

function navbar() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container >
          <Navbar.Brand href="#home"><strong>Bamboola Kids</strong></Navbar.Brand>
          <Nav className="me-auto mx-5">
            <Nav.Link href="#catalogo"><b>Catalogo</b></Nav.Link>
            <Nav.Link href="#nosotros"><b>Nosotros</b></Nav.Link>
            <Nav.Link href="#clientes"><b>Clientes</b></Nav.Link>
          </Nav>
        </Container>
        <div className='d-flex mx-5'>
          <Form className="d-flex">
            <Link className="d-inline-block align-top" to={"/cardWidget"}>
                <img src='https://cdn-icons-png.flaticon.com/512/7646/7646966.png' width="30" height="30" alt="Carrito"/>                
            </Link>
          </Form>
    </div>
      </Navbar>
    </>
  );
}

export default navbar;