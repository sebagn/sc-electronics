import React from "react";
import "./ItemCount.scss";
import Button from "react-bootstrap/Button";

const ItemCount = ({ title, stock, cantidad, setCantidad, onAdd }) => {
	const agregarItem = () => {
		cantidad < stock && setCantidad(cantidad + 1);
	};

	const quitarItem = () => {
		cantidad > 0 && setCantidad(cantidad - 1);
	};

	return (
		<div className="counter__wrapper">
			<div className="counter">
				<Button variant="light" onClick={quitarItem}>
					-
				</Button>
				<h3>{cantidad}</h3>
				<Button variant="light" onClick={agregarItem}>
					+
				</Button>
			</div>
			<div>
				<Button
					variant="dark"
					size="lg"
					onClick={onAdd}
					className="alCarrito"
				>
					Agregar al carrito
				</Button>
			</div>
		</div>
	);
};

export default ItemCount;
