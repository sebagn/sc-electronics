import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import isologo from '../../assets/Logo_sc/sg-isologo.png'
import namelogo from '../../assets/Logo_sc/sg-namelogo.png'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const NavBar = () => {

return <header className="App-header">
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="">
        <img
            alt="sg isologo"
            src={isologo}
            width="auto"
            height="40"
            className="d-inline-block align-top"
        />{' '}
        <img
            alt="sg electronics"
            src={namelogo}
            width="auto"
            height="40"
            className="d-inline-block"
        />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Productos</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="">Contacto</Nav.Link>
        <Nav.Link eventKey={2} href="">
            <BsInstagram className="mx-1"/>
        </Nav.Link>
        <Nav.Link eventKey={3} href="">
            <BsFacebook className="mx-1"/>
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
}

export default NavBar