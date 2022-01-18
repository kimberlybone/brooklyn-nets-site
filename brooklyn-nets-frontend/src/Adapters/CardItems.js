import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




export default function CardItem(props) {
    const {players} = props;


  return players.map((player) => {
    const headshotsURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`;
        return (
                    <Grid item xs={12} md={4} lg={3} key={player.pid}>
                            
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={headshotsURL}
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
                                    Attended: {player.hcc}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Height: {player.ht}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    Weight: {player.wt} lbs
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" >
                                    DOB: {player.dob}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" href={`/player-stats/${player.pid}`}>Stats</Button>
                                </CardActions>
                            </Card>
                           
                    </Grid>
        )}
  );
}