import './App.css'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import List from './components/List/List'

const productos=["celular","reloj","auriculares","tablet","nintendo"]

const App=()=> {
  const handleClick=()=>{
    alert("click me");
   };
  return (
    <div>
      <Navbar/>
       <h1>Nueva tienda de Tecnologia</h1>
       {/* <Button txtBtn="Contacto" handleClick={handleClick}   />
      <Button txtBtn="About" handleClick={handleClick}  />
      <Button txtBtn="Products" handleClick={handleClick}  />   */}
    </div>
     
  )
}

export default App
