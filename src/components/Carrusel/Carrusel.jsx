import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carrusel.scss";
import carousel1 from '../../assets/imagenes/carousel1.jpeg';
import carousel2 from '../../assets/imagenes/carousel2.jpg';
import carousel3 from '../../assets/imagenes/carousel3.jpg';

const Carrusel = () => {
  return (
    <Carousel className="carrusel">
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src={carousel1}
          alt="tienda de sc-electronics"
        />
        <Carousel.Caption>
          <h1>Bienvenido a SC Electronics</h1>
          <p>Encontrá los mejores productos de electronica</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src={carousel2}
          alt="smartwatch"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrusel d-block w-100"
          src={carousel3}
          alt="headset y tablet"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
