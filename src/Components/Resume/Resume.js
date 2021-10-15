import React from 'react'
import ResumeHeroSection from './Subsections/ResumeHeroSection'
import About from "./Subsections/About";
import "./Resume.css"
import Skills from './Subsections/Skills';
import PersonalResume from './Subsections/PersonalResume';
import ContactResume from './Subsections/ContactResume';

function Resume() {

    return (
        <>
            <ResumeHeroSection />
            <About />
            <Skills />
            <PersonalResume />
            <ContactResume />
        </>
    )
}

export default Resume