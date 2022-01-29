import { Container, Typography } from '@mui/material';
import React from 'react';

const ComingSoon = () => {
    return (
        <div>
            <Container maxWidth='xl'>
                <Typography className='comesoon' style={{ fontSize: '7.5em', textAlign: 'center', fontWeight: 'bold', marginTop: '150px' }} variant='h1'>
                    Coming Soon
                </Typography>
            </Container>
        </div>
    );
};

export default ComingSoon;