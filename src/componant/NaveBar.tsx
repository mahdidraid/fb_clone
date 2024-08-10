import { AppBar, Avatar, Box, styled, Toolbar, Typography } from '@mui/material'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import React, { useState } from 'react'
import { InputBase } from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function NaveBar() {
    const StyleedToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    });
    const Search =styled("div")(({theme}) =>({
        backgroundColor :"white",
        justifyContent :"space-between",
        padding:"0 10px",
        borderRadius :theme.shape.borderRadius,
        width : "40%",
    }));
    const Icons = styled(Box)(({theme}) =>({ display:"none",
     gap :"20px",
      alignItems :"center",
      [theme.breakpoints.up("sm")]:{
        display :"flex"
      }
       
    }))

    const BoxIcons = styled(Box)(({theme})=>({
        display:"flex",
        gap:"10px",
        alignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }))
    const[open,setopen] = useState<boolean>(false)
    const Hanlclikc = (e : React.MouseEvent<HTMLDivElement>)=>{
        setopen(true);
    }
  return (
    <AppBar position='sticky'>
        <StyleedToolbar  >
        <Typography variant='h6'sx={{display :{xs:"none" ,sm:"block"}}} >

            M_DRAIDRYA
        </Typography>
            <CodeOffIcon sx={{display:{xs:"block",sm:"none"}}}></CodeOffIcon>
            <Search><InputBase placeholder='Search....'></InputBase></Search>
            <Icons >
                
            <Badge badgeContent={4} color="error">
            <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
            <Notifications></Notifications>
            </Badge>
           

            <Avatar style={{height :"30px", width:"30px"}} src='../assets/avater.avif' onClick={(e)=>setopen(true)}></Avatar>
            
            </Icons>
            <BoxIcons>
            <Avatar style={{height :"30px", width:"30px"}} src='../assets/avater.avif' onClick={Hanlclikc}  ></Avatar>
            <Typography variant='span'>El mahdi</Typography>
                
            </BoxIcons>
            

        </StyleedToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
         onClose={(e) =>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
