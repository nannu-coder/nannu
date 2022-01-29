import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container maxWidth='xl'>
                <Typography style={{ textAlign: 'center', fontSize: '21.87em' }} variant='h1'>
                    404
                </Typography>
                <Typography style={{ textAlign: 'center' }} variant='h2'>
                    Page Not Found
                </Typography>
                <Box style={{ textAlign: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to='/home'>
                        <Button style={{ fontSize: '1.87em' }}>
                            Go Back
                        </Button>
                    </Link>
                </Box>
            </Container>
        </div>
    );
};

export default NotFound;