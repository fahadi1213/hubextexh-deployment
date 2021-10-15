import React from 'react'
import MainNavbar from '../../Includes/MainNavbar';
import './HeroSection.css'
import HsVector from '../../../Images/background image.png'
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <>
            <section className="intro-main navlinks-section" id="homeNav">
                <MainNavbar />
                <Container>
                    <Row className="hero-text">
                        <Col xs={12} md={12} lg={6}>
                            <h1 className="mb-4"><span className="text-white">Get your apps</span> Audited Today</h1>
                            <p className="ms-2">
                                We transform dreams into reality, research into insight, & coffee into unforgettable experiences on the phone & Web
                            </p>
                        </Col>
                        <Col xs={12} md={12} lg={6} className="hs-vector_col">
                            <img src={HsVector} alt="hs-vector" width="500px" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HeroSection;