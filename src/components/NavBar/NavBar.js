import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.js";
import isologo from "../../assets/Logo_sc/sg-isologo.png";
import namelogo from "../../assets/Logo_sc/sg-namelogo.png";
// import { BsInstagram } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";
import { CartContext } from "../../context/CartContext.js";
import "./NavBar.scss";
import { NavDropdown } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

const NavBar = () => {
    const { carrito } = useContext(CartContext);
    const [catList, setCatList] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const productosRef = collection(db, "productos");

            const collectionSnap = await getDocs(productosRef);
            const itemsCategory = collectionSnap.docs.map((doc) => {
                return doc.data().category;
            });
            let result2 = itemsCategory.filter((item, index) => {
                return itemsCategory.indexOf(item) === index;
            });
            setCatList(result2);
        }

        fetchdata();
    }, []);

    return (
        <Nav className="App-header container-fluid">
            <div className="navMenu">
                <Link to="/">
                    <img
                        alt="sg isologo"
                        src={isologo}
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <img
                        alt="sg electronics"
                        src={namelogo}
                        width="auto"
                        height="30"
                        className="d-inline-block"
                    />
                </Link>
            </div>
            {/* <div className="navMenu">
                <Link className="navLink" to="/">
                    Home
                </Link>
            </div> */}

            <NavDropdown
                id="nav-dropdown-categorias"
                title="Categorias"
                menuVariant="dark"
            >
                {catList.map((e) => (
                    <NavDropdown.Item key={e.index}>
                        <Link
                            className="navLink"
                            to={`/productos/${e}`}
                        >
                            {e}
                        </Link>
                    </NavDropdown.Item>
                ))}
            </NavDropdown>

            {/* <Nav.Link  eventKey={2}  href="https://www.instagram.com/scelectronics_/"  > <BsInstagram className="icons" />  </Nav.Link>  <Nav.Link eventKey={3}> <BsFacebook className="icons" />   </Nav.Link> */}

            {carrito.length > 0 && (
                <Nav.Link
                    className="icons"
                    as={NavLink}
                    to="/cart"
                    eventKey={4}
                >
                    <CartWidget />
                </Nav.Link>
            )}
        </Nav>
    );
};

export default NavBar;
