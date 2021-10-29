import React from 'react'
import { Container } from "react-bootstrap";
import "./Skills.css"

function Skills(props) {

    const skillsRespData = props.SkillRespData.technologies;

    return (

        <section className="section-bg">
            <div className="res-section skills">
                <Container>
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>
                    <div className="my-3 d-flex flex-wrap skills_style">
                        {
                            skillsRespData.map((curr,index) => {
                                return <span className="res-skills me-2 my-1" key={index}>{curr.title}</span>
                        })
                    }
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Skills