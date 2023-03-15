import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Home from "./components/Home/Home";

const App = () => {
  // const handleClick = () => {
  //   alert("Bienvenidos a la empresa");
  // };

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProductos(res.data)
  };

  useEffect(() => {
    getProductos();
  }, []);

  const categorias = productos.map((producto) => producto.category)

  return (
    <div>
      <Navbar categorias={categorias} />
      <h1>Empresa de Tecnologia</h1>
      <Routes>
        <Route path='/' element={<ItemListContainer productos={productos} />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/category/:cat' element={<ItemListContainer productos={productos} />} />
        <Route path='/item/:id' element={<ItemDetailContainer productos={productos} />} />
        <Route path='*' element={<h2> "404"</h2>} />
      </Routes>
      {/* <ItemListContainer texto="Bienvenidos a esta nueva tienda de tecnologia"/> */}
    </div>
  )
}

export default App

