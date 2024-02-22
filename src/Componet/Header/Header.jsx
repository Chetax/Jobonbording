import * as React from 'react';
import { useState } from 'react';

import Grid from '@mui/material/Grid';
import {  Container } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Location = [
  "Ahmedabad, Gujarat",
  "Ahmedabad, Indore",
  "Chennai, Hyderabad",
  "Amritsar, Punjab",
  "Aurangabad, Maharashtra",
  "Bengaluru, Karnataka",
  "Berhampur, Orissa",
  "Bhopal, Madhya Pradesh",
  "Bhubaneshwar, Orissa",
  "Chandigarh, Punjab",
  "Chennai, Tamil Nadu",
  "Cochin, Kerala",
  "Coimbatore, Tamil Nadu",
  "Dehradun, Uttarakhand",
  "Delhi-NCR",
  "Goa",
  "Haldwani, Uttrakhand",
  "Haridwar, Uttarakhand",
  "Hyderabad, Telangana",
  "Indore, Madhya Pradesh",
  "Jaipur, Rajasthan",
  "Jammu, Jammu & Kashmir",
  "Jamshedpur, Jharkhand",
  "Kanpur, Uttar Pradesh",
  "Kolhapur, Maharashtra",
  "Kolkata, West Bengal",
  "Lucknow, Uttar Pradesh",
  "Ludhiana, Punjab",
  "Mangalore, Karnataka",
  "Mumbai, Maharashtra",
  "Mysore, Karnataka",
  "Nagpur, Maharashtra",
  "Nashik, Maharashtra",
  "Noida, Uttar Pradesh",
  "Panipat, Haryana",
  "Puducherry, Tamil Nadu",
  "Pune, Maharashtra",
  "Punjab, Haryana",
  "Rajkot, Gujarat",
  "Ranchi, Jharkhand",
  "Rohtak, Haryana",
  "Rourkela, Orissa",
  "Surat, Gujarat",
  "Tirupati, Andhra Pradesh",
  "Vadodara, Gujarat",
  "Varanasi, Uttar Pradesh",
  "Visakhapatnam, Andhra Pradesh",
  "Uncategorized",
];
const team = [
  "All",
  "Insurance",
  "Offline Merchants - QR",
  "Business",
  "CreditMate",
  "Insurance",
  "Lending",
  "CreditMate",
  "Insurance",
  "Lending",
  "Lending Collections",
  "Offline Merchants - QR",
  "Paytm First Games",
  "Paytm Insider",
  "Paytm Insider",
  "Enabling",
  "Paytm Insider",
  "Public Relations",
  "Finance",
  "Paytm Insider"
];
const contractual=[
  "All","Contractual","Intern","On-roll","QR Sales","Uncategorized"
]

export default function BasicGrid() {
  const [locationtype, setlocationtype] = useState('');
  const [location, setlocation] = useState('');
  const [Team, setTeam] = useState('');
  const [Contractual, setContractual] = useState('');

  const handlelocationtype = (event) => {
    setlocationtype(event.target.value);
  };
  const handlelocation = (event) => {
    setlocation(event.target.value);
  };
  const handleTeam = (event) => {
    setTeam(event.target.value);
  };
  const handleContractual = (event) => {
    setContractual(event.target.value);
  };

  return (
    <Box sx={{bgcolor:"whitesmoke",pb:5}}>
    <Container >
      <Box sx={{  position: 'relative' }}>
        <Grid container spacing={2}>
          <Grid item xl={2.0} lg={2.4}  md={2.0} ></Grid>
          <Grid item xs={12} md={8} sm={12} >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} sm={4} >
                <Box sx={{ bgcolor: "lightgrey", flexGrow: 10}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Location Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={locationtype}
                      label="Age"
                      onChange={handlelocationtype}
                    >
                      <MenuItem value={"All"}>All</MenuItem>
                      <MenuItem value={"On-Site"}>On-Site</MenuItem>
                      <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                      <MenuItem value={"Remote"}>Remote</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}  md={3} sm={4}>
                <Box sx={{ bgcolor: "lightgrey"  }}>
                  <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">
                      Location
                    </InputLabel>
                    <Select 
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={location}
                      label="Age"
                      onChange={handlelocation}
                    >
                      {Location.map((loc) => (
                        <MenuItem key={loc} value={loc}>
                          {loc}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}  md={3} sm={4}>
                <Box sx={{ bgcolor: "lightgrey" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Team</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Team}
                      label="Age"
                      onChange={handleTeam}
                    >
                      {team.map((team)=>{
                        return <MenuItem key={team} value={team}>{team}</MenuItem>
                      })}
                      
                  
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={4}>
                <Box sx={{ bgcolor: "lightgrey" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Contractual
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Contractual}
                      label="Age"
                      onChange={handleContractual}
                    >
                      {
                        contractual.map((contet)=>{
                          return    <MenuItem key={contet} value={contet}>{contet}</MenuItem>
                        })
                      }
              
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}
/*

*/