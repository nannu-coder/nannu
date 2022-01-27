import { Container, Divider, Grid } from '@mui/material';
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';
import { IconContext } from "react-icons";
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="feature">
                <Container maxWidth="xl">
                    <div className="feature_heading">
                        <p style={{ marginTop: '50px', marginBottom: 0, color: '#ff014f' }}>Feature</p>
                        <h1 style={{ marginTop: '10px' }}>What I Do</h1>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="design neumorphism">
                                <div className="icon">
                                    <IconContext.Provider
                                        value={{ color: '#ff014f' }}
                                    >
                                        <div>
                                            <CgWebsite size={36} />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <div class="design_content">
                                    <h2>Responsive Web Design</h2>
                                    <p>Almost every new client these days wants a mobile version of their website. It's practically essential after all: one design for the BlackBerry, another for the iPhone, the iPad, netbook, Kindle — and all screen resolutions must be compatible, too. In the field of Web design and development, i'am quickly getting to the point of being unable to keep up with the endless new resolutions and devices.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="development neumorphism">
                                <div className="icon">
                                    <IconContext.Provider
                                        value={{ color: '#ff014f' }}
                                    >
                                        <div>
                                            <FiEdit size={36} />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <div class="development_content">
                                    <h2>Web Development</h2>
                                    <p>In the relatively short history of the internet, websites have continuously evolved to improve experiences for both brands and their audiences. Due to the leaps and bounds in technological advancements, these changes have made an impact on the way people experience content online.

                                        Modern websites are optimized for viewing on any device-laptops, tablets. </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Divider style={{ marginTop: '50px' }} />
                </Container>
            </div>
        </div>
    );
};

export default Feature;