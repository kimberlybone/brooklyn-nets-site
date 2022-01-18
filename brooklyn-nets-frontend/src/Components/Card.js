import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '../Adapters/CardItems.js';


export default function Product(props) {
    const contentURL1 = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp;players=Griffin,+Blake'

    

    const {players} = props

        return (
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={2}>
                            <Card players={players}/>
                    </Grid>
                </Container>
        )
}