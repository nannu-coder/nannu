import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Divider, Typography } from '@mui/material';
import './Banner.css';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import banner from '../../images/banner.png';
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiFiverr, SiFreelancer, SiUpwork, SiStackoverflow } from 'react-icons/si';

const Banner = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={7}>
                        <p className='top_head' variant="subtitle1">
                            Welcome To My World
                        </p>
                        <h3 className="my_intro" variant="h3">
                            Hi, I’m <span style={{ color: '#FF014F' }}>Nannu</span>
                        </h3>
                        <h3 className="my_intro" variant="h3">
                            <span style={{ color: '#FF014F' }}>a </span>
                            <Typed
                                strings={['professional Designer', 'professional Developer']}
                                typeSpeed={40}
                                backSpeed={10}
                                loop
                                smartBackspace={true}

                            />
                        </h3>
                        <p className='description' style={{ color: '#3c3e41' }} variant='body1'>
                            I’m a professional web designer &amp; Devel;oper. I have 3 Years of Experience in Website Designs also in Wordpress. I can design any kind of website. I provide reliable solutions at reasonable prices. Trust my skills, you will get the best designs. I love to work and want to make my clients happy. <br /> <br />

                            Dedicated and efficient full stack developer with 3+ years’ experience in Web Design &amp; Development. Certified in both Design &amp; Development. Bringing forth expertise in design installation, testing and maintenance of web systems.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className="my-image">
                            <img style={{ borderRadius: '10px' }} src={banner} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className="link_skill">
                            <div className="social_link">
                                <Typography variant='body1'>
                                    Follow Me On
                                </Typography>
                                <ul>
                                    <li>
                                        <a href="#"><FaGithub size={22} /></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaFacebookF size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagram size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <SiFiverr size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <SiFreelancer size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <SiUpwork size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <SiStackoverflow size={22} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className="contact">
                            <Typography style={{ marginBottom: '15px' }} variant='body1'>
                                Download My CV:
                            </Typography>
                            <a href="#">Download CV</a>
                            <a href="#">Conatct Me</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider style={{ marginTop: '50px' }}></Divider>
        </div>
    );
};

export default Banner;