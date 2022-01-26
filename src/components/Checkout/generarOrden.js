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
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

export const generarOrden = async (form, carrito, totalPrecio, vaciarCarrito, setEmailValidation) => {
  const formData = new FormData(form.current);
  // valida los emails (el resto de las validaciones las hace el form automaticamente)
  if (formData.get("email") === formData.get("emailConfirm")) {

    // construye la orden
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
    
    // fecth de los productos en el carrito
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
    
    // control de productos sin stock
    const batch = writeBatch(db);
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

    // termina la orden y da el feedback
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

    setEmailValidation(true)
    form.current.reset();
  } 
  else {
    setEmailValidation(false)
  }
};
