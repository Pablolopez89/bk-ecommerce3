import ItemDetail from './itemDetail';
import Checkout from './checkout';

const CardWidget = () => {
  return (
    <>
    <h1>Carrito de compras</h1>
    <div className='d-flex'>
         <ItemDetail />
         <Checkout/>
    </div>
    </>
  )
}

export default CardWidget