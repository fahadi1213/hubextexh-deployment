import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import pDImage1 from "../../Images/a.jpg"
import pDImage2 from '../../Images/1.jpg';
import pDImage3 from '../../Images/2.jpg';
import pDImage4 from '../../Images/2.jpg';
import "./ProjectsDetails.css"
import Footer from "../Includes/Footer"


function ProjectsDetails() {

    const projectsData = [
        { imageSrc: pDImage2 },
        { imageSrc: pDImage3 },
    ]
    const projectDetailsData = [
        { pDimageSrc:pDImage4, pDName: "Client 1", pDDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ]
    return (
        <section className="pdet-section-main">
            <Container className="pDet_container">
                <h1>
                    VOICE RULES
                </h1>
                <Row className="justify-content-between">
                    <Col className="col-12 col-md-2 pdet-section-info">
                        <h6>
                            Company
                        </h6>
                        <p>
                            Voicerules
                        </p>
                    </Col>
                    <Col className="col-12 col-md-2 pdet-section-info">
                        <h6>
                            Industry
                        </h6>
                        <p>
                            International Calling Company
                        </p>
                    </Col>
                    <Col className="col-12 col-md-2 pdet-section-info">
                        <h6>
                            Technologies
                        </h6>
                        <p>
                            CSS, HTML, JSON, JAVA.
                        </p>
                    </Col>
                    <Col className="col-12 col-md-2 pdet-section-info">
                        <h6>
                            Website
                        </h6>
                        <p>
                            voicerules.com
                        </p>
                    </Col>
                </Row>
                <Row className="p-0">
                    <Col>
                        <img className="pdet-section-img-main" src={pDImage1} alt=""/>
                    </Col>
                </Row>
                <Row className="p-0 text-start">
                    <Col className="col-12 col-lg-6 pdet-section-content">
                        <p>
                            VoiceRules is any device, anytime, anywhere phone system for your
                            sales and support teams. It takes seconds to get phone numbers in
                            100+ regions and start making or receiving calls. Make it easy and
                            free for customers to reach you and enjoy the suite of features
                            available for all phone numbers.
                        </p>
                    </Col>
                    <Col className="col-12 col-lg-6 pdet-section-content">
                        <p>
                            We believe to give full control and power to our customers for their
                            phone system. No contract. No upfront cost. No software or hardware
                            is needed. Increase your sales and brand trust with a virtual phone
                            number, powered by our leading phone management software.
                        </p>
                    </Col>
                </Row>
                <Row className="pdet-section-div-sub">
                    {
                        projectsData.map((curr,index) =>{
                            return (
                                <Col className="col-12 col-lg-6 justify-content-center align-items-center">
                                    <img width="100%" className="pdet-section-img-sub" key={index} src={curr.imageSrc} alt="project-details"/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
                <section className="testimonial text-center navlinks-section" id= 'test-offset'>
                    <div className="heading white-heading">Testimonial</div>
                    <div className="carousel-inner">
                        <div className="testimonial_slide">
                            <img
                                src={projectDetailsData[0].pDimageSrc}
                                className="img-circle img-responsive mb-5"
                                alt="img-1"
                            />
                            <h4>
                                <b>
                                    {projectDetailsData[0].pDName}
                                </b>
                            </h4>
                            <p>
                                {projectDetailsData[0].pDDesc}
                            </p>
                        </div>
                    </div>
                </section>
            <Footer />
        </section>
    )
}

export default ProjectsDetails
