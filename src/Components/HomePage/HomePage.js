import React, { useState } from 'react';
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
    const [costVisiState,setCostVisiState] = useState(false);
    const VisbilityHandlerCost = () =>{
        setCostVisiState(true)
    }


    // //Reseting visibility after setting true
    const stateReseterForVisibility = () =>{
        setCostVisiState(false)
    }
    return (
        <>
            <HeroSection />
            <Services />
            <Cost VisibilityHandler = {VisbilityHandlerCost} VisibilityResetHandlerCost = {stateReseterForVisibility}/>
            <Projects CostVisibility={costVisiState}/>
            <Testimonial />
            <StatCounter />
            <ContactUs />
            <Footer />
        </>
    );
}
export default HomePage;