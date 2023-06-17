import { useContext } from "react";
import { dataContext } from "../cartContext/cartContext";
import Card from 'react-bootstrap/Card';

const ItemDetail = () => {
    const {carrito} = useContext(dataContext);
  return carrito.map((product) =>{
    return (
        <Card className='mx-5' style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body >
                <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.marca}<br/>
                ${product.price}
              </Card.Text>
            </Card.Body>
        </Card>
    )
  })
}

export default ItemDetail