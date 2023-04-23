import React, { useContext, useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
 import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContextProvider';
 import   './ItemCount.module.css'


const ItemCount = ({ producto, stock, initial,hideAddToCart }) => {
 
  const [cantidad, setCantidad] = useState(initial);
  const { addToCart, isInCart } = useContext(CartContext)

  useEffect(() => { isInCart(producto.id) && addToCart(producto, cantidad) }, [cantidad])

 

  const navigate = useNavigate();
  const agregar = () => { cantidad < stock && setCantidad(cantidad + 1); };
  const quitar = () => { cantidad > 1  && setCantidad(cantidad - 1); };

 

  return (
    <div  >
     <span>  <IconButton onClick={agregar}><AddCircleIcon fontSize="medium" /> </IconButton>
      <h3>Cantidad: {cantidad}       {!hideAddToCart &&<Button className='itemCount' variant="contained" size="medium" onClick={() => { addToCart(producto, cantidad); navigate('/cart'); }}> <p> Agregar al Carrito</p> </Button>}
 </h3>
      <IconButton onClick={quitar}><RemoveCircleIcon fontSize="medium" /> </IconButton> </span>
      <div> 
       </div>
 
    </div>
  )
}

export default ItemCount