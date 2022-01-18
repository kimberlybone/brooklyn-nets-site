import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import Product from './Product.js';
import NavBar from './NavBar.js'
import Drawer from './Drawer.js';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Header from './Header.js';


  const sections = [
    { title: 'Dashboard', url: '/' },
    { title: 'Stats', url: '/player-stats/' },
    { title: 'Other Content', url: '#' },
  ];

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const theme = createTheme()

  export default function HomePage() {
    const rosterURL = 'https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json'
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(rosterURL)
        .then(response => {
            setProduct(response.data.t)
        })
    }, [rosterURL])
    

    if(product) {
        return (
            <ThemeProvider theme={theme}>
                {/* <Box sx={{ flexGrow: 1 }}> */}
                {/* <Box sx={{ display:'flex' }}> */}
                    <CssBaseline/>
                    <Container maxWidth="xl">
{/* 
                      <NavBar data={product}/>
                      <Drawer data={product}/> */}
                        <Header title={product} sections={sections} />

                    <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    >
                        <Toolbar/>
                          <Product players={product.pl}/>
                          
                    </Box>
                {/* </Box> */}
              </Container>
            </ThemeProvider>
        );
    }
    
    return (
        <Typography 
          variant='h6'
          sx={{alignItems: 'center'}}
          >
          Loading...
        </Typography>
    )
  }