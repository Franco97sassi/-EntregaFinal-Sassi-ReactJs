import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import products from "../products.js";

const itemsCollectionRef = collection(db, "productos");

const promises = products.map((producto) => addDoc(itemsCollectionRef, producto));

Promise.all(promises).then(() => {
  console.log("All done!");
  process.exit(0);
});