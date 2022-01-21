import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "./config";
import { data } from "../data/lista";

export const uploadProducts = () => {
  data.forEach(async (element) => {
    try {
      const docRef = await addDoc(collection(db, "productos"), 
      {...element, category: element.category.toUpperCase()}
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
};
