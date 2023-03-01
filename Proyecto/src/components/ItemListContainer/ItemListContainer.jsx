import React from 'react'
import styles from "./itemListContainer.module.css";

const ItemListContainer = (props) => {
  return   <h1 className={styles.greeting}> {props.texto} </h1>   
}

export default ItemListContainer 