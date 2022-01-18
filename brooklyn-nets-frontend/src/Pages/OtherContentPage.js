
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

import Header from '../Components/Header.js';
import Content from '../Components/Content.js';
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



  export default function OtherContentPage(props) {
    const { title, sections } = props;
    const contentURL = 'https://cors-anywhere.herokuapp.com/https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Durant,+Kevin'
    const [product, setProduct] = useState(null);
    // const navigate = useNavigate()

    useEffect(() => {
        axios.get(contentURL)
        .then(response => {
            setProduct(response.data)
        })
    }, [contentURL])
    

    if(product) {
        return (
            <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Container maxWidth="xl">
                        <Header title={title} sections={sections} />

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
                        <Content data={product}/>
                        <Button variant="outlined" href={product.next}>Next</Button>
                          
                    </Box>
              </Container>
            </ThemeProvider>
        );
    }
    
    return (
        <LoadingPage/>
    )
  }