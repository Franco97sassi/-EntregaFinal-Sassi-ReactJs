import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import db from "./firebase-config";

const itemsRef=collection(db, "items");
const cartRef=collection(db, "cart");
  
 
export const getItems = async() => {
    const itemCollection=await getDocs(itemsRef);
  return (
itemCollection.docs.map((doc) => ({id:doc.id, ...doc.data()}))
  )
}
export const deleteItem = async(id) => {
    const docRef=doc(db,"items","id");
    await deleteDoc(docRef);
    getItems()
}
export const addItem = async(id) => {
    const docRef=await addDoc(itemsRef,item);
    getItems()
}

 
export const getCartItems = async() => {
    const cartCollection=await getDocs(cartRef);
  return (
    cartCollection.docs.map((doc) => ({id:doc.id, ...doc.data()}))
  )
}

 
export const deleteCartItem = async()  => {
    const cartCollection=doc(db,"items","id");
    await deleteDoc(cartCollection);
    getItems()
}
export const addCartItem = async(id) => {
    const docRef=await addDoc (cartRef,item);
    getItems()
}

