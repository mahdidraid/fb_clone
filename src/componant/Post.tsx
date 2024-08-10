import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import manImage from '../assets/man.jpeg';
import girleImage from '../assets/girle.jpeg';
import manImagee from '../assets/man1.jpeg';
import manImage4 from '../assets/man4.jpeg';



export default function Post() {
  return (
    <Box>
         <Card sx={{margin : "5px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe" src={manImage}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={manImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox
            icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>}
            
          />

          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe" src={manImagee}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="30%"
        image={manImagee}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox
            icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>}
            
          />

          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe" src={girleImage}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="30%"
        image={girleImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox
            icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>}
            
          />

          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe" src={manImage4}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="30%"
        image={manImage4}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox
            icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>}
            
          />

          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
       
    </Card>
    </Box>
  )
}
