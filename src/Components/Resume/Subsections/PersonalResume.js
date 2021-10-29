import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./PersonalResume.css";
import { convertTimezoneToFullYear, stringToHTML } from '../Utilities/Utilities';

function PersonalResume(props) {

    const prRespData = props.PrRespData;




    return (
        <section id="resume-nav" className="side-nav-links-section resume-res res-section resume-section-main">
            <Container>
                <div className="section-title resume_style">
                    <h2>Resume</h2>
                </div>
                {/* Summary and Education Row */}
                <Row className="resume_style mb-3">
                    <Col className="col-12 col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item">
                            <h4>{prRespData.name}</h4>
                            <p>{prRespData.details}</p>
                            <ul>
                                <li>{prRespData.phone_number}</li>
                                <li>{prRespData.email}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="resume-title">Education</h3>
                        {
                            prRespData.employee_educations.map((curr, index) => {
                                return <EducationContainer key={index} title={curr.title} start={curr.start_date} end={curr.end_date} desc={curr.description} institute={curr.institution} />
                            })
                        }
                    </Col>
                </Row>


                {/* Experience Row */}
                <Row className="resume_style mb-3">
                    <h3 className="resume-title">Professional Experience</h3>
                    {
                        prRespData.employee_experiences.map((curr, index) => {
                            return <ExperienceContainer key={index} title={curr.title} start={curr.start_date} end={curr.end_date} descHTML={curr.content.body} company={curr.company_name} />
                        })
                    }
                </Row>
                <Row className="resume_style mb-3">
                    <h3 className="resume-title">Projects</h3>
                    {
                        prRespData.employee_projects.map((curr, index) => {
                            return <ProjectContainer key={index} title={curr.name} url={curr.url} descHTML={curr.description.body} />
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

//Education Container Component
const EducationContainer = (props) => {

    
        const startTimezone = props.start;
        const endTimezone = props.end;
        const startYear = convertTimezoneToFullYear(startTimezone)
        const endYear = convertTimezoneToFullYear(endTimezone)
    

    return (
        <div className="resume-item">
            <h4>{props.title}</h4>
            <h5>{startYear} - {endYear}</h5>
            <p>{props.institute}</p>
            <p>{props.desc}</p>
        </div>
    );
}

//Experience Container Component
const ExperienceContainer = (props) => {

    const stringHtml = props.descHTML;
    const parse = stringToHTML(stringHtml).children;
    const parseArray = Array.from(parse);
    const stringArrayList = parseArray.map(curr => curr.innerHTML);


    const startTimezone = props.start;
    const endTimezone = props.end;
    const startYear = convertTimezoneToFullYear(startTimezone)
    const endYear = convertTimezoneToFullYear(endTimezone)


    return (
        <Col lg={6}>
            <div className="resume-item">
                <h4>{props.title}</h4>
                <h5>{startYear} - {endYear}</h5>
                <p>{props.company}</p>
                <ul>
                    {
                        stringArrayList.map((curr, index) => {
                            return <li key={index}>{curr}</li>
                        })
                    }
                </ul>
            </div>
        </Col>
    );
}

//Projects Container Component
const ProjectContainer = (props) => {

    const stringHtml = props.descHTML;
    const parse = stringToHTML(stringHtml).children;
    const parseArray = Array.from(parse);
    const stringArrayList = parseArray.map(curr => curr.innerHTML);

    
    return (
        <Col lg={6}>
            <div className="resume-item">
                <h4>{props.title}</h4>
                <ul>
                    {
                        stringArrayList.map((curr, index) => {
                            return <li key={index}>{curr}</li>
                        })
                    }
                </ul>
            </div>
        </Col>
    );
}


export default PersonalResume
