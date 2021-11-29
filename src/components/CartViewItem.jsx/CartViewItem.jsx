import React, { useContext } from "react";
import "./CartViewItem.scss";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";

const CartViewItem = ({ prod }) => {
  const { removerDelCarrito } = useContext(CartContext);
  const handleRemover = () => removerDelCarrito(prod.id);

  return (
    <Row className="row m-2 align-items-center">
      <div className="col-auto">
        <img src={prod.img} alt={prod.title} className="cartView__img mb-2" />
      </div>
      <div className="col-auto">
        <h3 className="text-start">{prod.title}</h3>
        <p>Cantidad: {prod.cantidad}</p>
      </div>
      <div className="col-auto">
        <Button variant="danger" size="sm" onClick={handleRemover}>
          <BsTrash />
        </Button>
      </div>
    </Row>
  );
};

export default CartViewItem;
