import React, { useContext, useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { id, img, title, desc, price, stock } = producto;

  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const handleAlCarrito = () => {
    if (cantidad > 0) {
      agregarAlCarrito({
        id,
        title,
        price,
        img,
        cantidad,
      });
    }
  };

  return (
    <article className="detail row">
      <img className="detail_img col-md-6" src={`https://via.placeholder.com/160?text=${title}`} alt={title} />
      <div className="detail_body col-md-6">
        <h2 className="detail_title"> {title} </h2>
        <p className="detail_p"> {desc}</p>
        <h3 className="detail_subtitle"> ${price} </h3>

        {
          !isInCart(id) 
            ?
              <ItemCount
                stock={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={handleAlCarrito}
              />
            : 
              <Link to="/cart" className="button-pri btn btn-success btn-lg">
                {" "}
                Terminar compra{" "}
              </Link>
        }
        <BackButton />
      </div>
    </article>
  );
};

export default ItemDetail;
