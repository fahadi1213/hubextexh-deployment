import React from 'react'
import './ResumeHeroSection.css'
import { Container, Row } from 'react-bootstrap';
import TypeWriter from '../../UI/TypeWriter';
import Skills from './Skills';
import PersonalResume from './PersonalResume';
import ContactResume from './ContactResume';
import About from './About';


function ResumeHeroSection(props) {

    const responseData = props.ResumeRespData;

    const openSideBarHandler = () =>{
        props.SidebarOpen()
    }
    return (
        <>
            <div className="w-100">
                <section id="resume-home" className="resume_main d-flex flex-column align-items-center justify-content-center res-section side-nav-links-section">
                    <header className="d-flex flex-column align-items-end">
                        
                        <button onClick={openSideBarHandler} className="d-xl-none bars-btn">
                            <i className="fas fa-bars d-xl-none"></i>
                        </button>
                    </header>
                    <Container className="resume-cont">
                        <Row>
                            <div className="resume-hero-text">
                                <div className="text-white text-center">
                                    <h1 className="mb-4"> {responseData.name} </h1>
                                    <span className="fs-1">I'm <TypeWriter /></span>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <About AboutRespData={responseData} />
                <Skills SkillRespData={responseData} />
                <PersonalResume PrRespData={responseData} />
                <ContactResume CntctRespData={responseData} />
            </div>
        </>
    );
}
export default ResumeHeroSection;