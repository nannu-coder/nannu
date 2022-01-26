import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import './Banner.css';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

const Banner = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1">
                            Welcome To My World
                        </Typography>
                        <Typography style={{ fontWeight: 'bold', fontSize: '60px' }} className="intro" variant="h3">
                            Hi, I’m <span>Nannu</span>
                        </Typography>
                        <Typography style={{ fontWeight: 'bold', fontSize: '52px' }} className="intro" variant="h3">
                            <span>a </span>
                            <Typed
                                strings={['professional Designer', 'professional Developer']}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                                smartBackspace={true}

                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;