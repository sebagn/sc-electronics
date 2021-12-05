import { createContext } from "react";
import React from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const agregarAlCarrito = (item) => {
		setCarrito([...carrito, item]);
	};
	const removerDelCarrito = (id) => {
		setCarrito(carrito.filter((prod) => prod.id !== id));
	};

	const vaciarCarrito = () => {
		setCarrito([]);
	};

	const isInCart = (id) => {
		return carrito.some((prod) => prod.id === id);
	};

	const totalCantidad = () => {
		return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
	};
	const totalPrecio = () => {
		return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
	}

	return (
		<CartContext.Provider
			value={{
				carrito,
				agregarAlCarrito,
				removerDelCarrito,
				vaciarCarrito,
				isInCart,
				totalCantidad,
				totalPrecio
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
