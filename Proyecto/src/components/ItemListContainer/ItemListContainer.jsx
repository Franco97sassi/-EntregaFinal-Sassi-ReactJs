import React from 'react'
import styles from "./itemListContainer.module.css";

const ItemListContainer = ({txtBtn,handleClick}) => {
  return <button onClick={handleClick} className={styles.greeting}>  {txtBtn}</button>
}

export default ItemListContainer 