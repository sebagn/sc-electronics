import React, { useContext } from "react";
import "./CartViewItem.scss";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";

const CartViewItem = ({ prod }) => {
    const { removerDelCarrito, carrito, setCarrito } = useContext(CartContext);
    const handleRemover = () => removerDelCarrito(prod.id);
    const agregarItem = () => {
        let itemIndex = carrito.findIndex((element) => element.id === prod.id);
        if (carrito[itemIndex].cantidad < carrito[itemIndex].stock) {
            let nuevoCarrito = [
                ...carrito,
                (carrito[itemIndex].cantidad = carrito[itemIndex].cantidad + 1),
            ];
            let carritoLimpio = nuevoCarrito.filter(
                (prod) => prod.id !== undefined
            );
            setCarrito(carritoLimpio);
        }
    };
    const quitarItem = () => {
        let itemIndex = carrito.findIndex((element) => element.id === prod.id);
        let nuevoCarrito = [
            ...carrito,
            (carrito[itemIndex].cantidad = carrito[itemIndex].cantidad - 1),
        ];
        let carritoLimpio = nuevoCarrito.filter(
            (prod) => prod.id !== undefined && prod.cantidad > 0
        );
        setCarrito(carritoLimpio);
    };
    return (
        <Row className="row m-2 align-items-center">
            <div className="col-auto">
                <Button variant="danger" size="sm" onClick={handleRemover}>
                    <BsTrash />
                </Button>
            </div>
            <div className="col-auto">
                <img
                    src={`https://via.placeholder.com/160?text=${prod.title}`}
                    alt={prod.title}
                    className="cartView__img mb-2"
                />
            </div>
            <div className="col-auto cartView__body">
                <h3 className="text-start">{prod.title}</h3>

                <div className="counter">
                    <Button
                        variant="light"
                        onClick={quitarItem}
                        disabled={prod.cantidad === 0}
                    >
                        -
                    </Button>
                    <h3>{prod.cantidad}</h3>
                    <Button
                        variant="light"
                        onClick={agregarItem}
                        disabled={prod.cantidad === prod.stock}
                    >
                        +
                    </Button>
                </div>
            </div>
        </Row>
    );
};

export default CartViewItem;
