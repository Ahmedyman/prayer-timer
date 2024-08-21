import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name,time,image}) {
  return (
    
    <Card className='card-hover1' sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
        sx={{height:140}}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h1" color="text.secondary">
          {time}
               </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}