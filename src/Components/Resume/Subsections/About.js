import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./About.css";
import placeHolder from '../../../Assets/Images/placeholder.jpg'

function About(props) {

    const aboutRespData = props.AboutRespData;

    //When the Enity Image is not present we call the following statement to replace the empty space with a dumy image.
    const [replaceAbleImage,setReplaceAbleImage] = useState(aboutRespData.picture);
    const onErrorHandler = () =>{
        setReplaceAbleImage(placeHolder);
    }
    !(replaceAbleImage) && onErrorHandler();
    
    return (
        <section id="resume-about" className="side-nav-links-section about res-section">
            <Container>
                <div className="section-title mb-4">
                    <h2>About</h2>
                    <p>
                        {aboutRespData.details}
                    </p>
                </div>
                <Row>
                    <Col className="col-12 col-lg-4 h-100 d-flex justify-content-center mb-4">
                        <img src={replaceAbleImage}  className="img-fluid" alt="" 
                        />
                    </Col>
                    <Col className="col-12 col-lg-8 pt-4 pt-lg-0 content">
                        <h3 className="mb-4">{aboutRespData.title}</h3>
                        <p>
                            {aboutRespData.description}
                        </p>
                        <Row className="icons p-0">
                            <Col className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>Birthday:</strong>
                                        <span>{aboutRespData.birthday_date}</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>City:</strong>
                                        <span>{aboutRespData.city}</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>Phone:</strong>
                                        <span>{aboutRespData.phone_number}</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>Age:</strong>
                                        <span>{aboutRespData.age}</span>
                                        </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>Degree:</strong>
                                        <span>{aboutRespData.degree}</span>
                                        </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>&nbsp;
                                        <strong>Email:</strong>
                                        <span>{aboutRespData.email}</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;