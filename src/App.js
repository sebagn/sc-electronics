import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import { AppRouter } from "./routes/AppRouter";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
