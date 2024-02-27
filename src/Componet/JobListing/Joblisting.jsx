import { Box, Button, Container, Grid } from '@mui/material';
import {Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { data} from '../Jobdata';
function JobListing({props}) {
  const [locationtype, location, Team, Contractual] = props;
    return ( <>
<Box sx={{bgcolor:"whitesmoke",pb:5}}>
  {console.log(locationtype+" "+location+" "+Team+" "+Contractual)}
    <Container >
      <Box sx={{  position: 'relative' }}>
        <Grid container spacing={2}>
          <Grid item xl={2.0} lg={2.5}  md={2.0} ></Grid>
          <Grid item xs={12} md={8} sm={12} >
            <Grid container spacing={2}>
    {Object.keys(data).map((category) => (
        <Container sx={{}} key={category}>
          
          {Team==="All" ?
          <>
  
          <h1>{category}</h1>
                  {data[category].map((job) => (
                    <Box key={job.jobTitle} sx={{mb:5}} >       
                     <Stack  direction="row"   justifyContent="space-between"   alignItems="center"  spacing={2}>  
                    <span style={{fontSize:"25px"}}>{job.jobTitle}</span>
                    <Link to={`/job-details/${job.jobTitle}`}>
                    <Button  variant="contained">Apply</Button>
                    </Link>
                    </Stack>   
                    <Box sx={{mt:2}}> {job.locationType}-{job.location} </Box>   
                    </Box>
                              ))}
                 
          </> :<>{
                  Team===category ?
                  <>
 
 <h1>{category}</h1>
                  {data[category].map((job) => (
                    <Box key={job.jobTitle} sx={{mb:5}} >       
                     <Stack  direction="row"   justifyContent="space-between"   alignItems="center"  spacing={2}>  
                    <span style={{fontSize:"25px"}}>{job.jobTitle}</span>
                    <Link to={`/job-details/${job.jobTitle}`}>
                    <Button  variant="contained">Apply</Button>
                    </Link>
                    </Stack>   
                    <Box sx={{mt:2}}> {job.locationType}-{job.location} </Box>   
                    </Box>
                              ))}
                 </> : 
                  <> 
                   </>
          }</>  }
  
       
        </Container>
      ))}
      
          </Grid>
        </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
 
    </>);
}

export default JobListing;