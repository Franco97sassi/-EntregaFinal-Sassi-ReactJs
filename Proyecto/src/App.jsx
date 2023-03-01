import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

 
const App=()=> {
  const handleClick=()=>{
    alert("Bienvenidos a la empresa");
   };
  return (
    <div>
      <Navbar/>       
       <ItemListContainer texto="Bienvenidos a esta nueva tienda de tecnologia"/>
    </div>
     
  )
}

export default App

 