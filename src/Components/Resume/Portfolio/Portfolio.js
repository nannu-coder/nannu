import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import somoy from '../../../images/somoy.png';
import travel from '../../../images/travel.png';
import medinova from '../../../images/madinova.png';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={4} sm={12} xs={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="230"
                            image={somoy}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Watch Related Website
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className='port_btn' size="small">
                                <a href="https://times-somoy.web.app/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="230"
                            image={travel}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Travel Related Website
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className='port_btn' size="small">
                                <a href="https://travelpro-tourism.web.app/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="230"
                            image={medinova}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Healthcare Related Website
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className='port_btn' size="small">
                                <a href="https://medinova-health-care.web.app/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Portfolio;