 import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import "./card.css"
import { Link } from 'react-router-dom';

export default function ActionAreaCard({producto}) {
  return (
     
    <div className='containerProduct'>  
    <Card sx={{ maxWidth: 345   }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {producto.image} 
          alt="imagen"      
          sx={{ objectFit: "contain", width: 250,height: 250, marginLeft: "auto", marginRight: "auto", marginTop: "25px" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto.title} 
          </Typography>
          <Typography     variant="h6" color="text.secondary">
        $ {producto.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/item/${producto.id}`}>
       < Button variant="contained"    >   Ver Producto </Button>
      </Link>
    </Card> 
     
    </div>
  );
}