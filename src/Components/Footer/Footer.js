import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link style={{ color: '#ff014f', textDecoration: 'none' }} color="inherit" href="#">
                Nannu
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px 0'
                }}
            >
                <CssBaseline />
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto'
                    }}
                >
                    <Container style={{ textAlign: 'center' }} maxWidth="sm">
                        <Typography style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;