import './App.css'
import Navbar from './components/Navbar/Navbar'
 import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const productos=["celular","reloj","auriculares","tablet","nintendo"]

const App=()=> {
  const handleClick=()=>{
    alert("Bienvenidos a la empresa");
   };
  return (
    <div>
      <Navbar/>
       <h1>Nueva tienda de Tecnologia</h1>
       <ItemListContainer txtBtn="Click Me" handleClick={handleClick} />
    </div>
     
  )
}

export default App
