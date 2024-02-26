import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { data } from '../Jobdata';
import Stack from '@mui/material/Stack';

function JobDiscription() {
  const { jobId } = useParams();

  return (
    <>
      <Box sx={{  pb: 5 }}>
        <Container>
          <Box sx={{ position: 'relative' }}>
            <Grid container spacing={2}>
              <Grid item xl={2.0} lg={2.5} md={2.0}></Grid>
              <Grid item xs={12} md={10} sm={12}>
                <Grid container spacing={2}>
                  {Object.keys(data).map((category) => (
                    <Container sx={{}} key={category}>
                      {data[category].map((job) => {
                        if (job.jobTitle === jobId) {
                          return (
                            <>
                            <Box key={job.jobId}  sx={{mb:5 }}>
                                  <Grid container alignItems={'center'} >
                                    <Grid item xl={6}>
                                    <p style={{fontSize:"40px" ,color:"grey"}}>{job.jobTitle}</p>
                                    </Grid>
                                    <Grid xl={6}>
                                    <Button sx={{width:'170px',height:"40px",}} variant="contained">Apply</Button>
                                    </Grid>
                                  </Grid>
                          <p style={{fontSize:"14px",color:"grey"}}>{job.location}</p>
                          <p  style={{fontSize:"14px",color:"grey"}}>{category}/{job.locationType}</p>
                          </Box>
                             <Box sx={{}}>
                          
                              <p><span style={{color:"#6f7076"}}>About Us</span>:{job.AboutUs} </p>
                              <p style={{marginTop:"35px"}}><span style={{color:"#6f7076"}}>About The Team</span>: {job.AboutTheTeam}</p>
                              <p>
                                {job.TeamFeatures.map((jobi)=>{
                                  <p>{jobi}</p>
                                })}
                              </p>
                              </Box>
                              <Button variant="contained">Applly for the job</Button>
                              </>
                          );
                        }
                        return null;
                      })}
                    </Container>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default JobDiscription;
