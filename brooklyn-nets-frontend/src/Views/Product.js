import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card.js';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

// export const getPlayerInfo = players => {
//     return players.map((player) => {
//         return <li key={player.pid}>{player.fn} {player.ln}</li>;
//     })
// }

export default function Product() {
    const rosterURL = 'https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json'
    const statsURL = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json'
    const contentURL1 = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Griffin,+Blake'
    const contentURL2 = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Durant,+Kevin'
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(rosterURL)
        .then(response => {
            setProduct(response.data.t)
        })
    }, [rosterURL])

    // const getPlayerInfo = players => {
    //     return players.map((player) => {
    //         return <li key={player.pid}>{player.fn} {player.ln}</li>;
    //     })
    // }
    
    if(product){
        return (
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={2}>
                                <Card players={product.pl} id/>
                        </Grid>
                    </Container>
        )
    }

    return (
        <div>
            "Product does not exist"
        </div>
    )
}