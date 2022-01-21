import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    console.log(catId);

    async function fetchdata() {
      try {
        const productosRef = collection(db, "productos");
        const q = catId
          ? query(productosRef, where("category", "==", catId.toUpperCase()))
          : query(productosRef);
        const collectionSnap = await getDocs(q);
        const items = collectionSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(items);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchdata();
  }, [catId]);
  console.log(productos);

  return <>{loading ? <Loading /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
