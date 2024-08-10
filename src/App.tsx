

import { useState } from 'react';
import './App.css'
import Add from './componant/Add';
import Feed from './componant/Feed'
import NaveBar from './componant/NaveBar';
import RightBar from './componant/RightBar'
import SideBar from './componant/SideBar'
import Stack from '@mui/material/Stack';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Theme } from '@emotion/react';




function App() {
const [mode,setMode] = useState <"light" | "dark">("light")

const darkMode:Theme = createTheme({ 
  palette:{
    mode :mode,
    
  }
})

  return (

    
     <ThemeProvider theme={darkMode}>
      <Box bgcolor="background.default" color="text.primary" >

          <NaveBar></NaveBar>
          <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}></SideBar>
            <Feed></Feed>
          <RightBar ></RightBar>
          </Stack>
          <Add></Add>
        </Box>
    </ThemeProvider>


    
  )
}

export default App
