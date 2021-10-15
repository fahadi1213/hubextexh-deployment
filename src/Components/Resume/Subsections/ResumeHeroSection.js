import React from 'react'
import './ResumeHeroSection.css'
import { Container, Row } from 'react-bootstrap';
import TypeWriter from '../../UI/TypeWriter';
import SideMenu from '../Includes/SideMenu';

const ResumeHeroSection = () => {
    return (
        <>
            <section id="resume-home" className="resume-main d-flex flex-column justify-content-center align-items-center res-section">
                <Container className="resume-cont">
                    <Row>
                        <div className="resume-hero-text">
                            <SideMenu />
                            <div className="text-white text-center">
                                <h1 className="mb-4"> Hamza Hamid </h1>
                                <span className="fs-1">I'm <TypeWriter /></span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ResumeHeroSection;