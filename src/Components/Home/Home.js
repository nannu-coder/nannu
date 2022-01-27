import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Navbar from '../Navbar/Navbar';
import Resume from '../Resume/Resume/Resume';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feature></Feature>
            <Resume></Resume>
        </div>
    );
};

export default Home;