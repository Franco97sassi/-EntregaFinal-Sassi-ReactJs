import React, { useContext } from 'react'
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from './cartwidget.module.css'
import { CartContext } from '../../contexts/cartContextProvider';
import { Link } from 'react-router-dom';

const CartWidget = (props) => {
   
  return (
     // va a recibir las props desde la navbar
    <div className={styles.displayflex}>
         <ShoppingCartOutlinedIcon fontSize='medium' />
         {props.notifications>0 && <div>{props.notifications}</div>}
     </div>
    
  )
}
export default CartWidget