import React from "react";
import "./ItemCount.scss";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, cantidad, setCantidad, onAdd }) => {
	const agregarItem = () => {
		cantidad < stock && setCantidad(cantidad + 1);
	};

	const quitarItem = () => {
		cantidad > 0 && setCantidad(cantidad - 1);
	};

	return (
		<div className="counter__wrapper">
			<p className="mb-0">Unidades disponibles: {stock}</p>
			<div className="counter">
				<Button variant="light" onClick={quitarItem} disabled={cantidad === 0}>
					-
				</Button>
				<h3>{cantidad}</h3>
				<Button variant="light" onClick={agregarItem} disabled={cantidad === stock}>
					+
				</Button>
			</div>
			<div>
				<Button
					variant=""
					size="lg"
					onClick={onAdd}
					className="alCarrito button-pri"
					disabled={cantidad===0}
				>
					Agregar al carrito
				</Button>
			</div>
		</div>
	);
};

export default ItemCount;
