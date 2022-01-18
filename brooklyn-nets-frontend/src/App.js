import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Views/HomePage.js';
import PlayerStats from './Views/PlayerStats.js';
import AllPlayerStats from './Views/AllPlayerStats.js';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';

export default function App() {

  const statsURL = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json';
  const [product, setProduct] = useState(null);

  const sections = [
    { title: 'Dashboard', url: '/' },
    { title: 'Stats', url: '/player-stats/' },
    { title: 'Other Content', url: '#' },
  ];

  useEffect(() => {
      axios.get(statsURL)
      .then(response => {
          setProduct(response.data.tpsts)
      })
  }, [statsURL])

  if(product) {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/> 
            <Route exact path="/player-stats/:id" element={<PlayerStats data={product}/>}/>
            <Route exact path="/player-stats/" element={<AllPlayerStats data={product} sections={sections}/>}/>
          </Routes>
        </Router>
      </div>
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

// export default App;
