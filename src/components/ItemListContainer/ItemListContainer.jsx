import styles from "./itemListContainer.module.css";
import { useParams } from "react-router-dom";
import ActionAreaCard from "../Card/index";
  

const ItemListContainer = ({ productos }) => {
  //recibo parametros por ruta
  const { categoryId } = useParams();
  
  //filtro productos por categoria
  let productosFiltrados = [];
  if (categoryId) { productosFiltrados = productos.filter((producto) => producto.category === categoryId) }
  else {
    productosFiltrados = productos;
  }

  return (
    <div className={styles.container}>
      {productosFiltrados.map((producto) => (
        <ActionAreaCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemListContainer 