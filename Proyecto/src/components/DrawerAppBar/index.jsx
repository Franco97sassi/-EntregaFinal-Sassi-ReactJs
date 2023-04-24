import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
 import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from "../CartWidget/CartWidget";
  import {   Tooltip } from '@mui/material';
  import styles from './DrawerAppBar.module.css';
 import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContextProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 
const drawerWidth = 240;
const navItems = ["Celulares","Tablets","Notebooks","Consolas" ];

let activeStyle = {
  textDecoration: "none",
};

function DrawerAppBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] =  useState(false);

  //funcionalidad para ver las cantidades de productos en el carrito
const {cartItems,cartCount} = useContext(CartContext)
 const [notifications, setNotifications] = useState(0)
 useEffect (() => {
  setNotifications(cartCount)

}, [cartItems])
 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Typography  variant="h2" sx={{ my: 2 }}>
         
        <h2>TechSoft</h2>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (

          <NavLink to={`/category/${item}`} key={item} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
                  <NavLink to={"/cart"} key={"cart"} style={{ textDecoration: "none", color: "inherit" }}>
                  <ListItem key={"cart"} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<CartWidget notifications={notifications} />} />
                  </ListItemButton>
            </ListItem>
            </NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar component="nav" color="primary">

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
             </IconButton>
            <Tooltip title="Home" >
              <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: { xs: 'flex', sm: 'flex' }, margin: 'auto' }}>
                  <h2>TechSoft</h2>
                </Box>
              </Link>
            </Tooltip>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink to={`/category/${item}`} key={item}>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                </NavLink>
              ))}
              <NavLink to={`/cart`} key={"cart"}>
                <Button key={"cart"} sx={{ color: '#54c68c' }}>
                  <CartWidget notifications={notifications} />
                </Button>  
                </NavLink>
            </Box>
          </Toolbar>

          
        </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
       

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;


