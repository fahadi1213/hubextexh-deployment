import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Projects.css';
import pImage1 from '../../../Images/gas2go-1.jpg'
import pImage2 from '../../../Images/Gnrtn2.jpg'
import pImage3 from '../../../Images/buckpalmer-1.jpg'
import pImage4 from '../../../Images/vc5.jpg'
import ProjectItem from "./ProjectItem";
import Slider from "react-slick";



const Projects = () => {
    const check = document.getElementsByClassName('pd-image')
    const ProjImagesEle = []
    useEffect(() => {
        Array.from(check).forEach(curr => {
            ProjImagesEle.push(curr)
        })
    })
    const myProjImages = [pImage1, pImage2, pImage3, pImage4, pImage1, pImage2];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const projectsData = [
        { imageSrc: pImage1, pName: "Voicerules", pTech: ["CSS", "HTML", "JSON", "JAVA"], pDesc: "VoiceRules is any device, anytime, anywhere phone system for your sales and support teams. It takes seconds to get phone numbers in 100+ regions and start making or receiving calls. Make it easy and free for customers to reach you and enjoy the suite of features available for all phone numbers." },
        { imageSrc: pImage2, pName: "Momentum Education", pTech: ["RUBY ON RAILS", "JSON", "JAVASCRIPT"], pDesc: "Our mission is to provide learning experiences, mentorship, summer opportunities, scholarships, and individualized support to ensure students get to and through post-secondary education and into the workforce." },
        { imageSrc: pImage3, pName: "Gas2Go-Mobile Gas", pTech: ["RUBY ON RAILS", "JSON", "JAVA"], pDesc: "We are a Mobile Gas Delivery service that is changing the way you put gas in your car. No more tedious visits to the gas station, we’ll bring the gas station to you while you’re at work! Gas2Go is a service that allows customers to have gas delivered directly to their worksite, offices, and more!", projImage: { pImage2 } },
        { imageSrc: pImage4, pName: "GNRTN", pTech: ["CSS", "HTML", "JAVASCRIPT", "JSON", "JAVA"], pDesc: "We ARE A GROUP OF CREATIVES THAT DESIGN EVERY PIECE AT OUR DOWNTOWN LOS ANGELES STUDIO. WE TRY TO STAY AHEAD OF THE TRENDS TO BRING YOU FRESH PIECES EVERY WEEK SO YOU CAN PLAY WITH YOUR STYLE AND UPDATE YOUR LOOKS.", projImage: { pImage1 } },
        { imageSrc: pImage1, pName: "WWR", pTech: ["CSS", "JAVASCRIPT", "JSON", "ROR"], pDesc: "We Work Remotely is the largest remote work community in the world. With over 3M visitors, WWR is the number one destination to find and list incredible remote jobs. Includes positions like UX/UI designer, researcher, visual designer, creative director. Find the best remote design jobs from leading companies here!", projImage: { pImage3 } },
        { imageSrc: pImage2, pName: "Buck Palmer", pTech: ["CSS", "HTML", "JAVASCRIPT", "JSON", "JAVA"], pDesc: "VoiceRules is any device, anytime, anywhere phone system for your sales and support teams. It takes seconds to get phone numbers in 100+ regions and start making or receiving calls. Make it easy and free for customers to reach you and enjoy the suite of features available for all phone numbers.", projImage: { pImage4 } },
    ]

    window.onscroll = () => {
        if (window.scrollY > 1900) {

            ProjImagesEle[0].style.transform = 'translateX(0%)';
        }
        else if (window.scrollY < 1900) {
            ProjImagesEle[0].style.transform = 'translateX(120%)';
        }
        if (window.scrollY > 2700) {
            ProjImagesEle[1].style.transform = 'translateX(0%)';

        }
        else if (window.scrollY < 2700) {
            ProjImagesEle[1].style.transform = 'translateX(120%)';
        }
        if (window.scrollY > 3400) {
            ProjImagesEle[2].style.transform = 'translateX(0%)';
        }
        else if (window.scrollY < 3400) {
            ProjImagesEle[2].style.transform = 'translateX(120%)';
        }
        if (window.scrollY > 4100) {
            ProjImagesEle[3].style.transform = 'translateX(0%)';
        }
        else if (window.scrollY < 4100) {
            ProjImagesEle[3].style.transform = 'translateX(120%)';
        }
        if (window.scrollY > 4900) {
            ProjImagesEle[4].style.transform = 'translateX(0%)';
        }
        else if (window.scrollY < 4900) {
            ProjImagesEle[4].style.transform = 'translateX(120%)';
        }
        if (window.scrollY > 5700) {
            ProjImagesEle[5].style.transform = 'translateX(0%)';
        }
        else if (window.scrollY < 5700) {
            ProjImagesEle[5].style.transform = 'translateX(120%)';
        }
    }


    return (
        <>
            <section className="projects-main navlinks-section" id='projNav-main'>
                <div className="d-none d-lg-block">
                    <Row className="m-0">
                        <Col md={6}>
                            <Container className="px-5">
                                <h1 className="text-white text-center ourP-heading">Our Projects</h1>
                            <ul className="w-75">
                                {projectsData.map((curr, index) => {
                                    return <ProjectItem title={curr.pName} Techs={curr.pTech} ProjDesc={curr.pDesc} key={index} />
                                })}
                            </ul>
                            </Container>
                        </Col>
                        <Col md={6} className="stky-col p-0 position-sticky top-0 pd-main">
                            <div>
                                <div className="position-relative d-flex justify-content-end">
                                    {
                                        myProjImages.map((curr, index) => {
                                            return <div key={index} className="sticky_pImages position-absolute pd-image w-100" style={{ backgroundImage: `url(${curr})` }}></div>
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Ipad, Mobile Responsiveness */}
                <Container className="d-md-block d-lg-none pt-5 pb-3">
                    <h1 className="text-white text-center">Our Projects</h1>
                    <Slider {...settings}>
                        {
                            projectsData.map((curr, index) => {
                                return <ProjectItem key={index} title={curr.pName} ProjDesc={curr.pDesc} Techs={curr.pTech} ProjImage={curr.imageSrc} />
                            })
                        }
                    </Slider>
                </Container>
            </section>
        </>
    );
}

export default Projects