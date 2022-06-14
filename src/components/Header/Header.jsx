import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CssBaseline } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import {Box} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

 
const Header = () => {
  return (
  <>
  <CssBaseline />
      <AppBar position="relative">
        <Toolbar variant="dense">
          <WorkIcon sx={{ m: 1.5 }}   />
          <Typography variant="h6">
            Google Maps API 
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Box  position="absolute" top= "7px" right="16px">
  <IconButton href="https://www.linkedin.com/in/gscorrea" target="_blank">
<LinkedInIcon  />

</IconButton>
<IconButton href="https://github.com/gscorrea10" target="_blank">
<GitHubIcon />
</IconButton>
</Box>
        </Toolbar>
  </AppBar>
      </>
    
  );
  }
export default Header;