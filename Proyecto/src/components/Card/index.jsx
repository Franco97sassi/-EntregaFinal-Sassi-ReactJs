import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Rating } from '@mui/material';
 
export default function ActionAreaCard({ producto, cardProps }) {
  //const cardProps={maxWidth:345,height:200,showRating:true,showPrice:true,showDescription:true}
   return (
    <Card sx={{ maxWidth: cardProps.maxWidth, width: cardProps.maxWidth, borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardProps.height}
          image={producto.image}
          alt={producto.title}
          sx={{ objectFit: "contain", width: cardProps.height, marginLeft: "auto", marginRight: "auto" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          {cardProps.showDescription &&
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          }
          {cardProps.showPrice &&
            <Typography gutterBottom variant="h5" component="div">
              {"$" + producto.price}
            </Typography>
          }
          {cardProps.showRating && <Rating name="read-only" value={producto.rating.rate} readOnly />}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}