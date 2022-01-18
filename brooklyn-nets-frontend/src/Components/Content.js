import * as React from 'react';
import Grid from '@mui/material/Grid';
import ContentItem from '../Adapters/ContentItems.js'


export default function Content(props) {
    const { data } = props;

    const getContent = (data) => {
        return data.content.map((article) => {
            return <ContentItem key={article.title} article={article} />
        })
    }

    return (
        <Grid container spacing={4}>
            { getContent(data) }
        </Grid>
    )
}