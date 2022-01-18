import * as React from 'react';
import {useState, useEffect, PureComponent} from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

import LoadingPage from './LoadingPage.js';
import Header from '../Components/Header.js';
import Content from '../Components/Content.js';



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
      }
    }
  });


  
  export default function PlayerStats(props) {
    const { data, sections } = props;

    const [product, setProduct] = useState(null);
    const {id} = useParams();

    const players = data.pl;

    const getPlayer = id => {
      return players.find((player) => {
          return player.pid === id
      })
    }

    const player = getPlayer(id);


    const contentURL = `https://cors-anywhere.herokuapp.com/https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=${player.ln},+${player.fn}`;
    // const contentURL = `https://cors-anywhere.herokuapp.com/https://www.nba.com/nets/api/1.1/json/?type=story%20OR%20photo_gallery%20OR%20video&amp%3Bplayers=${player.ln}%2C%20${player.fn}&offset=10`

    const x = new XMLHttpRequest();
    x.open('GET', contentURL);

    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.onload = function() {
        setProduct(x.responseText);
    };
    x.send();
    console.log(product)

    // useEffect(() => {
    //   axios.get(contentURL)
    //   .then(response => {
    //       console.log(response.data)
    //       setProduct(response.data)
    //   })
    // }, [contentURL])


  if(product) {

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
                          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}, mb: 7 }}
                      >
                      {player.fn} {player.ln}'s Content
                    </Typography>
                <Content data={product}/>
                {/* <Button variant="outlined" href={product.next}>Next</Button> */}
                
            </Box>
          </Container>
        </ThemeProvider>
    );
  }
  return (
      <LoadingPage/>
  )
}