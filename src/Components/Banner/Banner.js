import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Divider, Typography } from '@mui/material';
import './Banner.css';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import banner from '../../images/profile.png';
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiFiverr, SiFreelancer, SiUpwork, SiStackoverflow } from 'react-icons/si';
import { Link } from 'react-router-dom';

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
                            <img style={{ borderRadius: '10px', width: '100%' }} src={banner} alt="" />
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
                                        <a href="https://github.com/nannu-coder" target='_blank'><FaGithub size={22} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/nazmul-hasan-nannu-927664201/" target='_blank'>
                                            <FaLinkedinIn size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/nannu.hasan.18/" target='_blank'>
                                            <FaFacebookF size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/nazmul_nannu/?hl=en" target="_blank">
                                            <FaInstagram size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/nannuHasan32" target="_blank">
                                            <FaTwitter size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.fiverr.com/nazmul_nannu" target="_blank">
                                            <SiFiverr size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.freelancer.com/u/themeworld" target="_blank">
                                            <SiFreelancer size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.upwork.com/freelancers/~018d5d489ea59e7f67" target="_blank">
                                            <SiUpwork size={22} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://stackoverflow.com/users/12042438/nannu" target="_blank">
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
                            <a href="https://docs.google.com/document/d/1xTZ0gNVM0uws79UMmz_fIar9kgex86m2/edit?usp=sharing&ouid=103612310798961976224&rtpof=true&sd=true" target="_blank">Download CV</a>
                            <Link to='/comingsoon'>
                                Conatct Me
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider style={{ marginTop: '50px' }}></Divider>
        </div >
    );
};

export default Banner;