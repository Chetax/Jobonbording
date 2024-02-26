import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from './Paytm_logo.png';
function Navbar() {
  return ( <>

<Box  sx={{ p:2,mb:1.5}}>
    <Container >
      
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <Grid container spacing={2}>
          <Grid item  xs={0} xl={2.0} lg={2.4} md={2.0}></Grid>
          <Grid item  xs={12} md={8} sm={12}>
          <Grid container spacing={2}>
              <Grid item xs={2.6}>
             <Link to="/"><img style={{height:"25px"}} src={logo} alt="" /></Link>   
                </Grid>
                </Grid>
            </Grid>
            </Grid>
          </Box>
        </Container>
        </Box>

  </> );
}

export default Navbar;

