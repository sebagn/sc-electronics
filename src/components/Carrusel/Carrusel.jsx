import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carrusel.scss";

const Carrusel = () => {
  return (
    <Carousel className="carrusel">
      
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src="https://placekitten.com/499/332"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Bienvenido a SC Electronics</h1>
          <p>Encontrá los mejores productos de electronica</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src="https://placekitten.com/499/332"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src="https://placekitten.com/499/332"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
