import Cartwidget from "../CartWidget/Cartwidget";
import DrawerAppBar from "../DrawerAppBar/index";


const categories = ["Celularaes", "Tablets", "Notebooks", "Placas de video", "Accesorios", <Cartwidget notifications="0" />]

const Navbar = () => {
  return (
    <nav  >
      <h2 >Techsoft</h2>

      {/* <NavLink to="/"   style={({ isActive }) => (isActive ? activeStyle : undefined)}> 
      <Button variant="contained"  color="success">Home</Button>
       </Navlink>
      
      <Navlink to="about"   style={({ isActive }) => (isActive ? activeStyle : undefined)}> 
      <Button variant="contained" color="success">About</Button>
      </Navlink>
      <Navlink to="products"   style={({ isActive }) => (isActive ? activeStyle : undefined)}> 
      <Button variant="contained" color="success">Products</Button>     
      </Navlink>
      <Navlink to="contact"   style={({ isActive }) => (isActive ? activeStyle : undefined)}> 
      <Button variant="contained" color="success">Contact</Button>
      </Navlink>
       */}

      <DrawerAppBar />

      {/* <Cartwidget/> */}
    </nav>
  );
};

export default Navbar;