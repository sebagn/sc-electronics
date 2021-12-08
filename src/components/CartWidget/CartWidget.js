import React, { useContext } from "react";
import "./CartWidget.scss";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Badge } from "react-bootstrap";

export default function CartWidget() {
	const { totalCantidad } = useContext(CartContext);

	return (
		<div>
			<BsCart2 className="cart" />
			<Badge bg="danger badge"> {totalCantidad()} </Badge>
		</div>
	);
}
