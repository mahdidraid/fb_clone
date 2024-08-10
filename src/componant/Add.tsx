import { styled, Tooltip, Typography,Avatar, TextField, Stack} from '@mui/material'
import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Mode } from '@mui/icons-material';
import manImagee from '../assets/man1.jpeg';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Add() {
    const [open,setOpne]=useState<boolean>(false)
    const StyleModal  = styled (Modal)(({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }))

  const UseBox =styled(Box)(({
    display:"flex",
    alignItems:"center",
    gap: "10px",
  }))
  
  return (
    <>
    <Tooltip onClick={e=>setOpne(true)} title="Delete" sx={{
        position: "fixed", 
        bottom: 20, 
        left: {
            xs: "calc(50% - 25px)", // Fixed syntax error here
            md: 30
        }
    }} >
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
  <StyleModal
  open={open}
  onClose={onclick=(e =>setopen(false))}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box height={280} width={400} bgcolor="background.default" color="text.primary" borderRadius={10} p={3}>
    <Typography variant='h6' color="gray" textAlign="center">Greate Post</Typography>
    <UseBox>
    <Avatar src={manImagee} sx={{width :30 ,height:30}}>
            
      </Avatar>
    <Typography variant='h6' fontWeight={500} >El mahdi Draidrya</Typography>
    </UseBox>
    <TextField sx={{width:"100%", mt:"10px"}}
          id="standard-multiline-static"
          
          multiline
          rows={2}
          placeholder="What on your mind ?"
          variant="standard"
        />
        <Stack direction="row" gap={2} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <VideoCameraFrontIcon color='success'/>
        <PersonAddIcon color='error'/>
          
        </Stack>
        <ButtonGroup variant="contained"  fullWidth>
      <Button >Post</Button>
      <Button  sx={{width:"100px"}}><DateRangeIcon></DateRangeIcon></Button>
 
    </ButtonGroup>
  </Box>
</StyleModal>

    </>
  )
} 
