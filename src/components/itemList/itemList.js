import { useContext } from "react";
import { dataContext } from "../cartContext/cartContext";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemList = () => {
const {data, carrito, setCarrito} = useContext(dataContext);

const compraProducts = (product) => {
    setCarrito([...carrito, product])
}
  return data.map((product) => {
    return (     
            <Card className='mx-5' style={{ width: '18rem' }} key={product.id}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body >
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.marca}<br/>
                    ${product.price}
                </Card.Text>
                <Button onClick={()=>compraProducts(product)} variant="dark">Agregar al carrito</Button>
                </Card.Body>
            </Card>
    )
  })
}

export default ItemList