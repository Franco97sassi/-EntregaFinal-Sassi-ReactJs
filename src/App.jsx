import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import db from '../db/firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/cartContextProvider';

const App = () => {

  const [productos, setProductos] = useState([]);

  //Accedo a la coleccion
  const getProductos = async () => {
    const itemsCollectionRef = collection(db, 'productos')
    const itemsCollection = await getDocs(itemsCollectionRef)
    setProductos(itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  };

  useEffect(() => {
    getProductos();
  }, []);


  const categorias = productos.map((producto) => producto.category)

  return (
    //Consumo el contexto
    <CartProvider children={

      <div>
        
        <Navbar categorias={categorias} />

        <Routes>
          <Route path='/' element={<ItemListContainer productos={productos} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:categoryId' element={<ItemListContainer productos={productos} />} />
          <Route path='/item/:id' element={<ItemDetailContainer productos={productos} />} />
          <Route path='*' element={<h1> "404 Not Found"</h1>} />
        </Routes>
      </div>
    } />
  )
}
export default App

