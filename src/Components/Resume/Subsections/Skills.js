import React from 'react'
import { Container } from "react-bootstrap";
import "./Skills.css"

function Skills() {

    const resumeData = [
        { rTech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "MATERIAL-UI", "REACT.JS", "NEXT.JS", "VUE.JS", "EXPRESS.JS", "NODE.JS", "MONGO",] },
    ]

    return (

        <section className="section-bg">
            <div className="res-section skills">
                <Container>
                    <div class="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="my-3 d-flex flex-wrap skills_style">
                        {
                            resumeData[0].rTech.map((curr,index) => {
                                return <span className="res-skills me-2 my-1" key={index}>{curr}</span>
                        })
                    }
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Skills