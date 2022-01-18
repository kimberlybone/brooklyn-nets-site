import React from 'react';
import Card from './Card.js';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Product(props) {
    const rosterURL = 'https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json'
    const contentURL1 = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Griffin,+Blake'
    const contentURL2 = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Durant,+Kevin'

    

    const {players} = props

        return (
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={2}>
                                <Card players={players}/>
                        </Grid>
                    </Container>
        )
}