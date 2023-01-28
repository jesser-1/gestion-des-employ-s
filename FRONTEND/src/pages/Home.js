import MySideNav from "../components/MySideNav";
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


function Home() {
return <div className="page"><MySideNav/>

<Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container >
          <Grid >
            <Typography variant="h2">
              Home
            </Typography>
            <Typography variant="h6">
               Réaliser par Ben Mefteh Jesser.
            </Typography>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
    </div>
}
export default Home;