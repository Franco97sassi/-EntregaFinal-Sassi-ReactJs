import React from 'react'
import { useParams } from 'react-router-dom';
import MultiActionAreaCard from '../Card/indexDetail';
import styles from './itemDetailContainer.module.css'
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useState } from 'react';


const ItemDetailContainer = ({ productos }) => {
  //recibo parametros por ruta

  <div>ItemDetailContainer</div>
  const { id } = useParams();

  //funcionalidad para cuando no se encuentra el producto
  const [loadingMsg, setLoadingMsg] = useState(" Error 404: Producto no encontrado ");

  const producto = productos.find(producto => producto.id == id)

  const getItem = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    producto = { id: docSnap.id, ...docSnap.data() };
     
  }

  producto ?? getItem(id)


  {
    //si el id del producto no existe retorno el mensaje sino retorno el producto
    if (producto === undefined) {
      return (
         <div>  
        <p className={styles.error} > {loadingMsg} </p>
        </div>
      )
    } else {
      return (
        <div className={styles.container}>
          <MultiActionAreaCard key={producto.id} producto={producto} />
        </div>)
    }
  }
}
export default ItemDetailContainer