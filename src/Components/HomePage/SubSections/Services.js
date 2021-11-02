import React from 'react';
import './Services.css'
import { Container, Row} from 'react-bootstrap';
// Images

import mobDev from '../../../Assets/Images/Mobile-development-pana.png'
import webDev from '../../../Assets/Images/Developer-activity-pana.png'
import softDev from '../../../Assets/Images/Programming-pana.png'
import FlipCard from '../../UI/FlipCard';
import ServicesResp from './ServicesResp';

const Services = () => {
    const myData = [
        {src:mobDev, title:"Mobile Development", des:"At Hubex Solutions we layout, construct and maintain iOS, android & windows mobile apps that just seems best."},
        {src:webDev, title:"Website Development", des:"We simply don’t develop customized web pages for our customers, we offer the best solutions for our clients which lead their marketplace share."},
        {src:softDev, title:"Software Development & Design", des:"Our software developers' squad construct, design, rework, analyze the most authentic software."},
    ]
    return (
        <>
            <section className="services-main navlinks-section" id="servicesNav-main">
                <Container>
                    <div className="text-center">
                        {/* <h5 className="p-0 serv-topText">Our Services</h5> */}
                        <h1 className="fw-bold">Customize Your Experience</h1>
                        <p className="fs-5 text-center text-secondary">We aim to build technology assets for you. </p>
                    </div>
                    <div className="d-none d-xl-block">
                    <Row className="mt-5 justify-content-center">
                        {
                            myData.map((item,index) =>{
                                return <FlipCard key={index} imageSrc={item.src} title={item.title} description={item.des}/>
                            })
                        }
                    </Row>
                    </div>
                    {/* Mobile and Ipads version */}
                    <div className="d-block d-xl-none">
                        <Row className = "justify-content-center">
                            {
                                myData.map((curr,index) =>{
                                    return <ServicesResp key = {index} Title = {curr.title} imageSrc = {curr.src} Desc = {curr.des}/>
                                })
                            }
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );

}

export default Services;