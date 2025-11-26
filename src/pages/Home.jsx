import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <>
            <Hero/>
            <Partners/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;