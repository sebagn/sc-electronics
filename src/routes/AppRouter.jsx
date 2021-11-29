import React from "react";
import { useRoutes } from "react-router";
import CartView from "../components/CartView/CartView";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NotFound from "../components/NotFound/NotFound";

export const AppRouter = () => {
	const routes = useRoutes([
		{ path: "/", element: <ItemListContainer /> },
		{ path: "/productos", element: <ItemListContainer /> },
		{ path: "/productos/:catId", element: <ItemListContainer /> },
		{ path: "/detail/:itemId", element: <ItemDetailContainer /> },
		{ path: "/cart", element: <CartView /> },
		{ path: "*", element: <NotFound /> },
	]);

	return routes;
};
