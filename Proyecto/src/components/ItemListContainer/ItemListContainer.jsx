import styles from "./itemListContainer.module.css";
 import { Link, useParams } from "react-router-dom";
import ActionAreaCard from "../Card/index";


const ItemListContainer = ({ productos }) => {
  const cardProps = { maxWidth: 345, height: 200, showRating: true, showPrice: true, showDescription: false, showActions: false }
  const { cat } = useParams();
  if (cat) { productos = productos.filter((producto) => producto.category === cat) }

  return (
    //  <h1 className={styles.greeting}> {props.texto} </h1>   
    <div  className={styles.container}>
      {productos.map((producto =>
        <Link to={`/item/ ${producto.id}`}>
          <ActionAreaCard key={producto.id} producto={producto} cardProps={cardProps} /></Link>
      ))}
    </div>
  )
}

export default ItemListContainer 