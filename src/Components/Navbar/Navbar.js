import React from 'react';
import { AppBar, CssBaseline, Toolbar, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


const Navbar = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const triggers = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar position="sticky" style={{ backgroundColor: triggers ? '#ECF0F3' : 'transparent', transition: 'all linear .3s', color: '#3c3e41' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                Nannu
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <NavLink
                                            style={({ isActive }) => {
                                                return {
                                                    display: "block",
                                                    textDecoration: 'none',
                                                    color: isActive ? "#ff014f" : ""
                                                };
                                            }}
                                            to="/home"

                                        >
                                            <Button

                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                            >
                                                Home
                                            </Button>
                                        </NavLink>

                                        <NavLink
                                            style={({ isActive }) => {
                                                return {
                                                    display: "block",
                                                    textDecoration: 'none',
                                                    color: isActive ? "#ff014f" : ""
                                                };
                                            }}
                                            to="/allproject"

                                        >
                                            <Button

                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                            >
                                                All Project
                                            </Button>
                                        </NavLink>
                                    </MenuItem>

                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                textDecoration: 'none',
                                                color: isActive ? "#ff014f" : ""
                                            };
                                        }}
                                        to="/blog"

                                    >
                                        <Button

                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                        >
                                            Blog
                                        </Button>
                                    </NavLink>



                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                Nannu
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            textDecoration: 'none',
                                            color: isActive ? "#ff014f" : ""
                                        };
                                    }}
                                    to="/home"

                                >
                                    <Button

                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                    >
                                        Home
                                    </Button>
                                </NavLink>

                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            textDecoration: 'none',
                                            color: isActive ? "#ff014f" : ""
                                        };
                                    }}
                                    to="/allproject"

                                >
                                    <Button

                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                    >
                                        All Project
                                    </Button>
                                </NavLink>

                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            textDecoration: 'none',
                                            color: isActive ? "#ff014f" : ""
                                        };
                                    }}
                                    to="/blog"

                                >
                                    <Button

                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#3c3e41', display: 'block' }}
                                    >
                                        Blog
                                    </Button>
                                </NavLink>

                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
};

export default Navbar;