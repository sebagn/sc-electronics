import React, { useContext } from "react";
import "./CartWidget.scss";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import Button from "@restart/ui/esm/Button";
import { Badge, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartWidget() {
	const { carrito, totalCantidad } = useContext(CartContext);

	return (
		<>
			{carrito.length > 0 && (
				<div>
					<BsCart2 className="cart" />
					<Badge bg="danger badge"> {totalCantidad()} </Badge>
				</div>
			)}
		</>
	);
}
