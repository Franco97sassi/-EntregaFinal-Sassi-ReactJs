import React from 'react'
import { useParams } from 'react-router-dom';
import ActionAreaCard from '../Card/index';
import styles from './itemDetailContainer.module.css'
const ItemDetailContainer = ({productos}) => {
  <div>ItemDetailContainer</div>
    const { id } = useParams();
    const producto = productos.find(producto => producto.id == id)
    const cardProps = { maxWidth: "80vw", height: 350, showRating: true, showPrice: true, showDescription: true, showActions: true }

  return (
     <div className={styles.container}>
      <ActionAreaCard key={producto.id} producto={producto} cardProps={cardProps} />
     </div>

  )
}

export default ItemDetailContainer