import React, { useContext, useRef } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  Timestamp,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore/lite";

const Formulario = () => {
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const form = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const order = {
      buyer: {
        nombre: formData.get("nombre"),
        apellido: formData.get("apellido"),
        email: formData.get("email"),
      },
      items: carrito,
      total: totalPrecio(),
      payment: formData.get("paymentMethod"),
      date: Timestamp.fromDate(new Date()),
    };

    // console.log(order);

    const batch = writeBatch(db);
    const orderRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        carrito.map(el => el.id)
      )
    );
    const outOfStock = [];
    const productos = await getDocs(q);

    productos.docs.forEach(doc => {
      const itemToUpdate = carrito.find(prod => prod.id === doc.id);

      if (doc.data().stock >= itemToUpdate.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.cantidad,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });
    if (outOfStock.length === 0) {
      batch.commit();
      addDoc(orderRef, order).then(res => {
        Swal.fire({
          title: "Has finalizado tu compra",
          icon: "success",
          text: `Tu codigo de compra es ${res.id}`,
        });
      });
      vaciarCarrito();
    } else {
      Swal.fire({
        title: "No hay stock de los productos:",
        icon: "error",
        text: outOfStock.map(el => el.title).join(','),
      });;
    }


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

export default Formulario;
