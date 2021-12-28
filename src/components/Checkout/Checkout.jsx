import React, { useContext, useRef } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { generarOrden } from "../../firebase/generarOrden";

const Checkout = () => {
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const form = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    generarOrden(form, carrito, totalPrecio, vaciarCarrito);
  };

  return (
    <Form className="m-3" ref={form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Ingrese su nombre" name="nombre" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="apellido" placeholder="Ingrese su apellido" name="apellido" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" name="email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPaymentMethod">
        <FloatingLabel className="mb-3" label="Seleccione un metodo de pago" required>
          <Form.Select aria-label="Floating label select example" name="paymentMethod">
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="d-flex	justify-content-center">
        <Link to="/" className="button-pri btn btn-lg m-3">
          Seguir comprando
        </Link>
      </div>
    </Form>
  );
};

export default Checkout;

