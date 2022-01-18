import * as React from 'react';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AllAvgStats from './AllAvgStats.js';
import AllTotalStats from './AllTotalStats.js';
import Drawer from './Drawer.js';
import AppBar from './NavBar.js';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Header from './Header.js';


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const theme = createTheme({
    typography: {
      h4: {
        color: '#1976d2'
      },
      h5: {
        color: '#1976d2'
      }
    }
  })
  
  
  export default function AllPlayerStats(props) {

    const { data, sections } = props;
 
  
    return (
      <ThemeProvider theme={theme}>

                  <CssBaseline/>
                  <Container maxWidth="xl">

                  <Header title={data} sections={sections} />

                  <Box
                  component="main"
                  sx={{
                      backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                          ? theme.palette.grey[100]
                          : theme.palette.grey[900],
                      flexGrow: 1,
                      height: '85vh',
                      overflow: 'auto',
                  }}
                  >
                      <Toolbar/>

                      <Typography
                          variant="h4"
                          noWrap
                          align="center"
                          component="div"
                          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                      Player Stats
                      </Typography>
                      <Container maxWidth="xl">
                        <Grid container spacing={8} sx={{ mt: 1}}>
                          <Grid item xs={12}>
                            <Paper sx={{ p: 1.5, display: 'flex', flexDirection: 'column' }}>
                            
                              <AllAvgStats/>

                            </Paper>
                          </Grid>

                        <Grid item xs={12}>
                          <Paper sx={{ p: 1.5, display: 'flex', flexDirection: 'column' }}>

                            <AllTotalStats/>

                          </Paper>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
              </Container>
          </ThemeProvider>
    );
}