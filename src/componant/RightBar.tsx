import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import manImage from '../assets/man.jpeg';
import girleImage from '../assets/girle.jpeg';
import manImagee from '../assets/man1.jpeg';
import manImage4 from '../assets/man4.jpeg';
import post from '../assets/post1.webp';
import post1 from '../assets/post2.jpeg';
import post2 from '../assets/post3.jpeg';


import React from 'react'

export default function RightBar() {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}} }  >
    <Box position="fixed">
      <Typography variant="h6" fontWeight={100}>Online Frindes</Typography>
      <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={girleImage} />
      <Avatar alt="Travis Howard" src={manImage} />
      <Avatar alt="Cindy Baker" src={manImage4} />
      <Avatar alt="Agnes Walker" src={manImagee} />
      <Avatar alt="Trevor Henderson" src={manImagee} />
    </AvatarGroup>
      <Typography variant="h6" fontWeight={100}  marginTop="10px">Last Post</Typography>
      <ImageList cols={3} rowHeight={100} gap={10} >
      <ImageListItem>
      <img
       src={post}
       alt='sea'
      />
    </ImageListItem>
      <ImageListItem>
      <img
       src={post1}
       alt='sea'
      />
    </ImageListItem>
      <ImageListItem>
      <img
       src={post2}
       alt='sea'
      />
    </ImageListItem>
      <ImageListItem>
      <img
       src={post2}
       alt='sea'
      />
    </ImageListItem>
      <ImageListItem>
      <img
       src={post2}
       alt='sea'
      />
    </ImageListItem>
      <ImageListItem>
      <img
       src={post2}
       alt='sea'
      />
    </ImageListItem>
      </ImageList>

      <Typography variant="h6" fontWeight={100}  marginTop="10px">Last Converstion</Typography>
     
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={manImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={girleImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={manImagee} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      
    </Box>
    </Box>
  )
}
