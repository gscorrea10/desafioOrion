import React from "react";
import Header from "./components/Header/Header";
import {Grid} from "@mui/material"
import Login from "./components/Form/Login";
import Map from "./components/Map/Map";





const App = () => {
  return (
    <>
    <Header />
    {/*<Login />*/}
    
    <Grid container spacing={3} style={{width: '100%'}}>
    
    <Map />
  
    </Grid>
    </>

  )
  }

export default App;



