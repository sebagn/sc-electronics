import React from "react";
// import { Button } from "react-bootstrap";
// import { uploadProducts } from "../../firebase/uploadProducts";
import Carrusel from "../Carrusel/Carrusel";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  // const handleUploadProducts = () => {
  //   uploadProducts();
  // };

  return (
    <>
      <Carrusel />
      <ItemListContainer />
      {/* <Button  onClick={handleUploadProducts}>Subir</Button> */}
    </>
  );
};
export default Home;
