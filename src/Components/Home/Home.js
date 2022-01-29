import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import InstanrMessage from '../InstantMessage/InstanrMessage';
import Resume from '../Resume/Resume/Resume';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Resume></Resume>
            <Footer></Footer>
            <InstanrMessage></InstanrMessage>
        </div>
    );
};

export default Home;