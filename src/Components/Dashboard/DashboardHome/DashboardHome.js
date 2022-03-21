import React from 'react';
import Typography from '@mui/material/Typography';

const DashboardHome = () => {
    return (
        <div>
            <Typography sx={{
                color: '#ff1744', fontWeight: 'bold', textAlign: 'center'
            }} variant="h2" gutterBottom component="div">
                Dashboard Home
            </Typography>
        </div>
    );
};

export default DashboardHome;