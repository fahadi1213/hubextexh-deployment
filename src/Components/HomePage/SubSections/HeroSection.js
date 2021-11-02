import React from 'react'
import MainNavbar from '../../Includes/MainNavbar';
import './HeroSection.css'
import HsVector from '../../../Assets/Images/background-hsVector.png'
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
    const scrollIntoViewHandler = (id) => {
        //This closeSideBar function is just for mobile devices
        //It will help us when a user is on mobile device and open the sidebar 
        //and then click on clicks then the navbar will be close and scroll to the desired section. 
        const anchor = document.getElementById(id);
        const y = anchor.getBoundingClientRect().top
        anchor.scrollIntoView({behavior: "smooth", top: y});
    }
    return (
        <>
            <section className="intro-main navlinks-section" id="homeNav">
                <MainNavbar />
                <Container>
                    <Row className="hero-text">
                        <Col xs={12} md={12} lg={6} className="px-4 mt-5">
                            <div className="mt-5">
                                <h1 className="mb-4"><span className="intro-desc-text fw-bolder text-white d-block">Get your apps</span> Audited Today</h1>
                                <p>
                                   We transform dreams into reality, research into insight, & coffee into<br /> unforgettable experiences on the phone & Web
                                </p>
                            </div>
                            <div className="mt-4 hero-section-btns">
                                <button className="text-uppercase me-2 my-2 btn-mau" onClick={() => scrollIntoViewHandler('costNav-main')}>Request a demo</button>
                                <button className="text-uppercase me-2 my-2 btn-sow" onClick={() => scrollIntoViewHandler('projNav-main')}>See our Work</button>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6} className="hs-vector_col">
                            <img src={HsVector} alt="hs-vector" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HeroSection;