import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {   CardActionArea, CardActions  } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../contexts/cartContextProvider';
import { useContext } from 'react';
import { useState } from 'react';
import "./card.css"

 
export default function MultiActionAreaCard({producto  }) {
  const [productItems, setProductItems] = useState(0)
  const {addToCart} = useContext(CartContext)

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };
  return ( 
     <div className='containerDetail'>  
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {producto.image}  
          alt="imagen"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          {producto.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           $ {producto.price}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {producto.description} 
          </Typography>
          <Typography variant="h4" color="text.secondary">
            <CardActions>  
          <ItemCount stock={5} initial={1} hideAddToCart={false}  producto={producto}/>
          
          </CardActions>
          
          </Typography>
          {/* <Button variant="outlined" onClick={() => handleAddToCart(producto)}>Agregar al carrito</Button> */}
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
  );
  
}