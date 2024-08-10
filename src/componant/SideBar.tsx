import { Box } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox'
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';

import HomeIcon from '@mui/icons-material/Home';
type SideBarprops={
  mode : "light" | "dark";
  setMode :(value: "light"| "dark") =>void;
}

export default function SideBar({mode,setMode}:SideBarprops) {
  return (
    <Box flex={1} p={2}    sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupAddIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <PermIdentityIcon/>
              </ListItemIcon>
              <ListItemText primary="Frinds" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermContactCalendarIcon/>
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch  onChange={()=> setMode(mode === 'light' ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}
