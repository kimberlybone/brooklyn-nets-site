import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function ContentItem (props) {
    const { article } = props;

    return (
        <Grid item xs={12} md={6}>
        <CardActionArea component="a" href={article.url} target="_blank">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {article.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {article.created}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article.duration}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Watch video
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={article.thumbnail}
              alt={article.imageLabel}
            />
          </Card>
        </CardActionArea>
      </Grid>
    )
}

ContentItem.propTypes = {
    article: PropTypes.shape({
      created: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  };