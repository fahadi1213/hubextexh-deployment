import React from 'react';
import ContactUs from '../ContactUs';
import Footer from '../Includes/Footer';
import StatCounter from '../StatCounter';
import HeroSection from './SubSections/HeroSection';
import Projects from './SubSections/Projects';
import Services from './SubSections/Services';
import './HomePage.css';
import Cost from './SubSections/CostSection/Cost';
import Testimonial from './SubSections/Testimonial';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <Cost/>
            <Projects />
            <Testimonial />
            <StatCounter />
            <ContactUs />
            <Footer />
        </>
    );
}
export default HomePage;