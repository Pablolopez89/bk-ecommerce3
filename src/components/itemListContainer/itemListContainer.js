import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../navbar/navbar';

function itemListContainer() {
  return (
    <>
    <Navbar />
    <div className='d-flex'>
    <Card className='mx-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_780435-MLA50059896888_052022-O.webp" />
      <Card.Body >
        <Card.Title>Campera</Card.Title>
        <Card.Text>
          Marca: Grisino<br/>
          #5258
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_894663-MLA50059896889_052022-O.webp" />
      <Card.Body>
        <Card.Title>Campera Corderito</Card.Title>
        <Card.Text>
        Frisa Fantasia Grisino<br/>
        #1248
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    <Card className='ms-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_845858-MLA50059898407_052022-O.webp" />
      <Card.Body>
        <Card.Title>Campera Poliester</Card.Title>
        <Card.Text>
          Marca: Grisino <br/>
          #5458
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    <Card className='mx-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_941799-MLA50059903391_052022-O.webp   " />
      <Card.Body>
        <Card.Title>Mono De Piel    </Card.Title>
        <Card.Text>
          Marca Grisino  <br/>
          #4543
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default itemListContainer;