import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import './Portfolio.css'
import { CircularProgress } from '@mui/material';

const Portfolio = ({ web }) => {
    const { image, name, description, liveLink } = web;
    return (
        <>
            <Grid item md={4} sm={12} xs={12}>
                {!web ? <CircularProgress /> : <Card>
                    <CardMedia
                        component="img"
                        height="230"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0, 115)}...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className='port_btn' size="small">
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </Button>
                    </CardActions>
                </Card>}
            </Grid>
        </>
    );
};

export default Portfolio;