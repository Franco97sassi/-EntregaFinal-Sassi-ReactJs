import styles from "./navbar.module.css";
import Cartwidget from "../CartWidget/Cartwidget";
import {Button} from "@mui/material"

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h2 >Techsoft</h2>      
      <Button variant="contained"  color="success">Home</Button>
      <Button variant="contained" color="success">About</Button>
      <Button variant="contained" color="success">Products</Button>
      <Button variant="contained" color="success">Contact</Button>
      <Cartwidget/>
    </nav>
  );
};

export default Navbar;