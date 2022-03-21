import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import useAuth from '../../../Hooks/UseAuth';


const drawerWidth = 240;



const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOUt } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>

                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <ListItem button>
                        <ListItemIcon>
                            <AiFillHome size={28} />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='addportfolio'>
                    <ListItem button>
                        <ListItemIcon>
                            <MdOutlineMiscellaneousServices size={28} />
                        </ListItemIcon>
                        <ListItemText>Add Portfolio</ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='test'>
                    <ListItem button>
                        <ListItemIcon>
                            icon
                        </ListItemIcon>
                        <ListItemText>test</ListItemText>
                    </ListItem>
                </Link>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        padding: '3px 0'
                    }}
                >
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography style={{ display: 'flex', justifyContent: 'spaceBetween' }} variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>

                        <button style={{ backgroundColor: '#ff014f', cursor: 'pointer', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: '1px solid #ff014f' }} onClick={logOUt}>Log Out</button>

                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    {/* <h1>Text Here</h1> */}
                    <Outlet />
                </Box>
            </Box>
            );
        </div>
    );
};

export default Dashboard;