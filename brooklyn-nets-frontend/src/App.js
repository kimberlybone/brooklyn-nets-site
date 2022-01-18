import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';

import HomePage from './Pages/HomePage.js';
import PlayerStatsPage from './Pages/PlayerContentPage.js';
import AllPlayerStatsPage from './Pages/TeamStatsPage.js';
import OtherContentPage from './Pages/OtherContentPage.js';


export default function App() {

  const statsURL = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json';
  const [product, setProduct] = useState(null);

  const sections = [
    { title: 'Players', url: '/' },
    { title: 'Team Stats', url: '/team-stats/' },
    // { title: 'Other Content', url: '/other-content/' },
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
            <Route exact path="/" element={<HomePage sections={sections}/>}/> 
            <Route exact path="/player-stats/:id" element={<PlayerStatsPage data={product} sections={sections}/>}/>
            <Route exact path="/team-stats/" element={<AllPlayerStatsPage data={product} sections={sections}/>}/>
            {/* <Route exact path="/other-content/" element={<OtherContentPage title={product} sections={sections}/>}/> */}
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

