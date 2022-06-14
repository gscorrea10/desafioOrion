import React from "react";
import { Grid,  Typography, Select, MenuItem, Link, TextField } from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { blue} from "@mui/material/colors";
import AutoComplete from "react-google-autocomplete";
import { Box } from "@mui/system";

const Login = () =>{
 
  return (
  <Grid>
      <Grid align='left'>
        <Typography color="textPrimary">
        Path
        </Typography>

     </Grid>
     <Stack direction="row" spacing={1}>
     <TextField
  //apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
  //onPlaceSelected={(place) => console.log(place)}
  placeholder="Origin" 
 
/>
<TextField
 // apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
  //onPlaceSelected={(place) => console.log(place)}
  placeholder="Destination"
 
  />

  <Select id="mode">
    <MenuItem value="driving"> Driving </MenuItem>
    <MenuItem value="walking"> Walking </MenuItem>
    <MenuItem value="bicycling"> Bicycling </MenuItem>
    <MenuItem value="transit"> Transit </MenuItem>
  </Select>
  <IconButton aria-label="addlocation"  onClick={() => alert(123)}>
  <AddLocationIcon fontSize="inherit" sx={{ color: blue[500] }}/> </IconButton>
  </Stack>
  





  </Grid>
  )
}

export default Login;