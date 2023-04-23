 import db from '../../db/firebase-config'
import {  collection,   deleteDoc,   doc  , getDocs, setDoc, updateDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
     const [orders, setOrders] = useState([])
    const cartCollectionRef = collection(db, 'cart')

    useEffect(() => {
    getCartItems();
    getOrders();
    }, [])
   
    const addToCart = (producto,qty) => { 
        if (isInCart(producto.id)) {
            resetQty(producto.id,qty)
        }
        else {
            addCartItem({ "producto": producto, "quantity": qty }, producto.id);
        }

    }

    const removeFromCart=async(id)=>{
 await deleteDoc(doc(db, 'cart', id))
        getCartItems();

    }
    const clearCart=()=>{
        cartItems.forEach(async (item) => { 
            await deleteDoc(doc(db, 'cart', item.id))
        }  )
        getCartItems();
    }

    const isInCart = (id) => {	//implementa la funcionalidad para verificar si un producto ya está en el carrito
        return (cartItems.length === 0)?false:cartItems.some((obj) => obj.producto.id === id)
    }

    const cartCount = () => {	//implementa la funcionalidad para contar la cantidad de productos en el carrito
        return cartItems.reduce((acc, obj) => acc + obj.quantity, 0)
    }

    const resetQty = (id, qty) => {	//implementa la funcionalidad para resetear la cantidad de un producto en el carrito
         updateCartItemQuantity(id, qty);
    }

    const  getCartItems = async () => {
        const cartCollection = await getDocs(cartCollectionRef)
        const cartItems = cartCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setCartItems(cartItems);
    }

   

    const  addCartItem = async (item,id) => {
        const ref = doc(db, "cart", id);
        const docRef =await setDoc(ref, item);
         getCartItems();
    }

    const  updateCartItemQuantity = async (id, qty) => {
        await updateDoc(doc(db, 'cart', id), { quantity: qty })
        getCartItems();
    }

    const  addOrder = async (order, id) => {
        const ref = doc(db, "orders", id);
        const docRef =await setDoc(ref, order);
        getOrders();
    }

    const  getOrders = async () => {
        const ordersCollectionRef = collection(db, 'orders')
        const ordersCollection = await getDocs(ordersCollectionRef)
        const orders = ordersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setOrders(orders);
    }

 

    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,clearCart,isInCart,resetQty,getCartItems,cartCount,addOrder,getOrders,orders }}>          
            {children}
        </CartContext.Provider>
    )
}