import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../contexts/cartContextProvider';
import ReactTextTransition  from "react-text-transition";
import { Stack } from '@mui/material';
import Form from '../Form';
import styles from "./cart.module.css"

const Cart = () => {
    const { cartItems,removeFromCart, clearCart} = useContext(CartContext)
    const [noProductMessage, setNoProductMessage] = useState("No hay productos en el carrito");
   
    return (
        <>
            <div >
                <div className={styles.cartContainer}  >
                    <div>  
                    <h1>Carrito</h1>
                    
                    <button onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                    {cartItems.length === 0 ?
                                    <div className={styles.cartNoProducts}  >

                        <p> {noProductMessage}</p>
                        </div>
                        :
                        <>
                            {cartItems.map((item) => (
                                <div className={styles.cartCard} key={item.producto.id}>
                                    {/* <ActionAreaCart producto={producto} /> */}
                                    <img src={item.producto.image} width={250} />
                                    <p>{item.producto.title}</p>
                                    <p>${item.producto.price}</p>
                                    <div><button onClick={() => removeFromCart(item.producto.id)}>Eliminar</button></div>
                                    <div>
                                        <ItemCount
                                            initial={item.quantity}
                                            producto={item.producto}
                                            stock={5}
                                            hideAddToCart={true}
                                        />
                                    </div>
                                    <div>
                                        <h3 className='h3'>Subtotal: 
                                        <ReactTextTransition
                                            children={"$" + (item.producto.price * item.quantity)} /></h3>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                    
                    {cartItems.length > 0 && <div className={styles.cartTotalContainer}>
                        <Form setNoProductMessage={setNoProductMessage} cartClear={clearCart} />
                        <Stack>
                            <h2 className='h2'>Total:
                                <ReactTextTransition
                                    children={"$" + cartItems.reduce((acc, item) => acc + item.producto.price * item.quantity, 0)} /></h2>
                        </Stack>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Cart