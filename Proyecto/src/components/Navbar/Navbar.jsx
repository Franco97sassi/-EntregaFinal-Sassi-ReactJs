import styles from "./navbar.module.css";
 import Button from "../Button/Button";
import Cartwidget from "../CartWidget/Cartwidget";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1>Mi Empresa</h1>      
      <button >Home</button>
      <button >About</button>
      <button  >Products</button>
      <button >Contact</button>
      <Cartwidget/>
    </nav>
  );
};

export default Navbar;