import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const getPlayerInfo = players => {
    return players.map((player) => {
        return <li key={player.pid}>{player.fn} {player.ln}</li>;
    })
}

export default function MediaCard(props) {
    const {players, id} = props
    console.log(id)
  return players.map((player) => {
        return (
            // <div style={{all: unset}} key={player.pid}>
                    <Grid item xs={12} md={4} lg={3} key={player.pid}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 350,
                            }}
                        >
                            
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    
                                    <Typography gutterBottom variant="h5" component="div">
                                    {player.fn} {player.ln}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Number: {player.num}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Position: {player.pos}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Location: {player.hcc}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Height: {player.ht}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Weight: {player.wt}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Stats</Button>
                                </CardActions>
                            </Card>
                           
                        </Paper>
                    </Grid>
            // </div>
        )}
  );
}