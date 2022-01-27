import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Skills from '../Skills/Skills';
import './Resume.css';
import Portfolio from '../Portfolio/Portfolio';
import Educations from '../Educations/Educations';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    tabs: {

        "& .MuiTabs-indicator": {
            backgroundColor: "#ff014f",
            height: 3,
        },
        "& .MuiTab-root.Mui-selected": {
            color: '#ffff',
            backgroundColor: '#ff014f',
            borderRadius: '5px'
        }
    }
})

const Resume = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='xl'>
                <div style={{ marginTop: '50px', textAlign: 'center' }} className="Resume_heading">
                    <Typography style={{ color: '#ff014f' }} variant='body1'>
                        3+ Years Of Experience
                    </Typography>
                    <Typography >
                        <h1 style={{ marginBottom: '20px' }} className='resume'>My Resume</h1>
                    </Typography>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                            className={classes.tabs}
                            aria-label="basic tabs example">
                            <Tab label="Professional Skills" {...a11yProps(0)} />
                            <Tab label="Portfolio" {...a11yProps(1)} />
                            <Tab label="Educations" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Skills></Skills>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Portfolio></Portfolio>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Educations></Educations>
                    </TabPanel>
                </Box>
            </Container>
        </div>
    );
};

export default Resume;