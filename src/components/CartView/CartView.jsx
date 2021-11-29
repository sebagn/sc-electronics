import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartViewItem from "../CartViewItem.jsx/CartViewItem";
import { Link } from "react-router-dom";

const CartView = () => {
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="m-2">
      <h1>Finaliza tu compra!</h1>
      {carrito.length > 0 ? (
        carrito.map((prod) => <CartViewItem prod={prod} />)
      ) : (
        <h2>No hay items en el carrito</h2>
      )}
      <Button variant="outline-danger" onClick={handleVaciar}>
        Vaciar carrito
      </Button>
      <Link to="/" className="btn btn-success m-3">
        Volver al inicio
      </Link>
    </div>
  );
};
export default CartView;
