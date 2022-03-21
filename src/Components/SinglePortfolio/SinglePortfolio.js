import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Portfolio from '../Resume/Portfolio/Portfolio';

const SinglePortfolio = () => {
    const [website, setWebsite] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/portfolio')
            .then(res => res.json())
            .then(data => setWebsite(data))
    }, [])

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {website.map((web) => <Portfolio web={web} key={web._id}></Portfolio>)}
            </Grid>
        </div>
    );
};

export default SinglePortfolio;