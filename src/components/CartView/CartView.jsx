import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartViewItem from "../CartViewItem/CartViewItem";
import { Link } from "react-router-dom";

const CartView = () => {
	const { carrito, vaciarCarrito, totalPrecio } = useContext(CartContext);
	const handleVaciar = () => {
		vaciarCarrito();
	};

	return (
		<div className="m-3">
			<h1>Finaliza tu compra</h1>

			{carrito.length > 0 
				?
					<>
						<section>
							{carrito.map((prod) => (<CartViewItem prod={prod} />))}
						</section>
						<h3>Total a pagar: ${totalPrecio()}</h3>

						<Button variant="outline-danger" onClick={handleVaciar}>
							Vaciar carrito
						</Button>
						<Link to="/checkout" className="button-outline-pri btn btn-lg m-3">
							Finalizar compra
						</Link>
					</>
				:
					<h2 className="w-100 text-center">
						No hay items en el carrito
					</h2>
			}

			<div className="d-flex	justify-content-center">
				<Link to="/" className="button-pri btn btn-lg m-3">
					Seguir comprando
				</Link>
			</div>
		</div>
	);
};
export default CartView;
