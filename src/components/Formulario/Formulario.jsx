import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import Swal from 'sweetalert2'


const Formulario = () => {
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    emailConfirm: "",
  });
  const handleInputChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    const order = {
      buyer: { ...values },
      items: carrito,
      total: totalPrecio(),
      date: Timestamp.fromDate(new Date()),
    };

    const orderRef = collection(db, "orders");

    addDoc(orderRef, order).then(res => {
      Swal.fire({
        title: 'Has finalizado tu compra',
        icon: 'success',
        text: `Tu codigo de compra es ${res.id}`
      })
    });

    console.log(order);
    
    vaciarCarrito()
    setValues({
      nombre: "",
      apellido: "",
      email: "",
      emailConfirm: "",
    })
  };

  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="nombre"
          placeholder="Ingrese su nombre"
          onChange={handleInputChange}
          name="nombre"
          value={values.nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="apellido"
          placeholder="Ingrese su apellido"
          onChange={handleInputChange}
          name="apellido"
          value={values.apellido}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          onChange={handleInputChange}
          name="email"
          value={values.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupValidEmail">
        <Form.Label>Confirmacion de email</Form.Label>
        <Form.Control
          type="emailConfirm"
          placeholder="Confirme email"
          onChange={handleInputChange}
          name="emailConfirm"
          value={values.emailConfirm}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
