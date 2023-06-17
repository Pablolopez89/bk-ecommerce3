import { useContext } from "react";
import { dataContext } from "../cartContext/cartContext";


const Checkout = () => {
    const {carrito} = useContext(dataContext);

    const total = carrito.reduce((suma, prenda) => suma + prenda.price, 0);
  return (
    <div className="">
        <h3>Total a pagar ${total}</h3>
    </div>
  )
}

export default Checkout