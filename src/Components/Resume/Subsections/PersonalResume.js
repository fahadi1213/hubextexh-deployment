import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./PersonalResume.css"

function PersonalResume() {
    return (
        <section id="resume-nav" className="resume res-section resume-section-main">
            <Container>
                <div className="section-title resume_style">
                    <h2>Resume</h2>
                    <p>
                        A detail oriented individual with a degree in software engineering, having
                        skills in multiple technologies used for designing and developing applications’
                        Front-End, Back-End and Databases. I'm an enthusiastic, responsible and
                        hard working person having the ability to work well under pressure and
                        adhere to strict deadlines.
                    </p>
                </div>
                <Row className="resume_style">
                    <Col className="col-12 col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Hamza Hamid</h4>
                            <p>Innovative and deadline-driven JAVASCRIPT DEVELOPER with 3+ years of experience designing and developing websites from initial concept to final, polished deliverable.</p>
                            <ul>
                                <li>Mughalpura, Lahore</li>
                                <li>+92 303 456-7890</li>
                                <li>hamza@gmail.com</li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Masters in Software Engineering</h4>
                            <h5>2018 - 2020</h5>
                            <p>University of Lahore, lahore.</p>
                            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelors in Software Engineering</h4>
                            <h5>2014 - 2018</h5>
                            <p>University of Lahore, lahore.</p>
                            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>
                    </Col>
                    <Col className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior JAVASCRIPT specialist</h4>
                            <h5>2019 - Present</h5>
                            <p>SouthVille Solutions, Lahore. </p>
                            <ul>
                                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Node.JS specialist</h4>
                            <h5>2017 - 2019</h5>
                            <p>Giga Lab, Lahore.</p>
                            <ul>
                                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="resume_style">
                    <Col className="col-12 col-lg-6">
                        <h3 className="resume-title">Projects</h3>
                        <div className="resume-item pb-0">
                            <h4>eBoard: The Teaching Evolution (Final Year Project)</h4>
                            <ul>
                                <li>eBoard is an online education portal for live &amp; interactive sessions developed using Laravel Framework.</li>
                                <li>Documented Software Requirements &amp; Specification (SRS).</li>
                                <li>Designed and Developed database using SOL.</li>
                                <li>Developed the Front End using the Bootstrap theme.</li>
                                <li>Developed the Back-End using tne PHP.</li>
                            </ul>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>Walahala Explorer</h4>
                            <ul>
                                <li>Developed REST APIs in Node.</li>
                                <li>Developed the Back-End and Database.</li>
                                <li>Development and modification of the front-end REACT Application.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="col-lg-6 resume-project">
                        <div className=" resume-item pb-0">
                            <h4>Carpoolyn</h4>
                            <ul>
                                <li>Designed the database models, using PostgreSQL.</li>
                                <li>Developed the APIs for the Application.</li>
                                <li>Developed the ride tracking module using Sockets.</li>
                                <li>Developed all the Admin side Back-End tasks.</li>
                                <li>Implemented the Redis on the Chat module.</li>
                                <li>Implemented the notification scheduling.</li>
                                <li>Implemented the AWS S3 for images.</li>
                                <li>Maintaining ail the functionalities of Application as well as Admin side.</li>
                                <li>Implemented admin panel Front-End modules in Vue.</li>
                                <li>Developed and maintaining marketing site In Vue.</li>
                            </ul>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>ABrand</h4>
                            <ul>
                                <li>Implemented the social platform login module.</li>
                                <li>Implemented the post sharing module.</li>
                                <li>Implemented the AWS S3 for images and videos.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PersonalResume
