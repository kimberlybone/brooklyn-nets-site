import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import Product from '../Components/Card.js';
import { Container } from '@mui/material';
import Header from '../Components/Header.js';

import LoadingPage from './LoadingPage.js';



  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const theme = createTheme()



  export default function HomePage(props) {
    const { sections } = props;
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
                    <CssBaseline/>
                    <Container maxWidth="xl">
                        <Header title={product} sections={sections} />

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
                          <Product players={product.pl}/>
                          
                    </Box>
              </Container>
            </ThemeProvider>
        );
    }
    
    return (
        <LoadingPage/>
    )
  }