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
import { db } from "./config";
import Swal from "sweetalert2";

export const generarOrden = async (form, carrito, totalPrecio, vaciarCarrito) => {
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
    const orderDoc = await addDoc(orderRef, order);
    Swal.fire({
      title: "Has finalizado tu compra",
      icon: "success",
      text: `Tu codigo de compra es ${orderDoc.id}`,
    });
    vaciarCarrito();
  } else {
    Swal.fire({
      title: "No hay stock de los productos:",
      icon: "error",
      text: outOfStock.map(el => el.title).join(","),
    });
  }
  form.current.reset();
};
