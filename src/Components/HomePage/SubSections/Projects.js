import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Projects.css';
import ProjectItem from "./ProjectItem";
import Slider from "react-slick";
import axios from "axios";
//Dummy Project Image
import dummyImage from '../../../Assets/Images/dummy.jpg'


const Projects = () => {
    const [pimages, setPimages] = useState(null);
    //Project API ----------start-------------

    // API Response Data
    const [projData, setProjData] = useState(null);

    useEffect(() => {
        //Getting the projects images array---start
        const projectsImages = document.getElementsByClassName('pd-image')
        setPimages(projectsImages);
        //Getting the projects images array---end

        const fetchData = async () => {
            try {
                const data = await projDataHandler();
                setProjData(data)
            }
            catch (err) {
                console.log("could not find the response:", err)
            }
        }
        fetchData();

    }, [])


    const projDataHandler = async () => {
        const baseURL = 'https://0d76-72-255-21-77.ngrok.io/api/v1/projects';
        const response = await axios.get(baseURL, {
            headers: {
                "Authorization": process.env.REACT_APP_AUTH_KEY
            }
        });
        const data = response.data;
        return data;
    }
    if (!projData) return null;

    //Project API ----------end-------------


    // Slick Carousel setting---start
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
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
                    dots: true,
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
    // Slick Carousel setting---end


    //Images Translating Handlers-----start
    let count = 0;
    let check = true


    window.addEventListener('wheel', (event) => {
        if (event.deltaY < 0) {
            check = false;

        } else if (event.deltaY > 0) {
            check = true;
        }
    });
    window.addEventListener('scroll', () =>{
        if(window.pageYOffset <= 0){
            resetCount();
        }

    })

    const resetCount = () =>{
        if(window.pageYOffset <= 0){

            Array.from(pimages).map(curr =>{
                return curr.style.transform = 'translateX(120%)';
            })
            count = 0;
            return
        }
        count = 6
    }

    const ImageTransportHandler = () => {
        if (check === true && count !== pimages.length) {
            pimages[count++].style.transform = 'translateX(0%)';
            console.log(count)
        }

    }

    const ImageResetTransport = () => {
        count === 0 && resetCount();
        if (check === false) {
            pimages[--count].style.transform = 'translateX(120%)';
        }
    }

    return (
        <>

            <section className="projects-main navlinks-section " id='projNav-main'>
                <div className="d-none d-xl-block">
                    <Row className="m-0">
                        <Col md={6}>
                            <Container className="px-5">
                                <h1 className="fw-bolder ourProj-heading display-5 op-heading">Our Projects</h1>
                                <p className="fs-5 ourProj-heading text-secondary">From Concept to Creation.</p>
                                <ul className="w-100">
                                    {projData.map((curr, index) => {
                                        return <ProjectItem key={index} title={curr.title} ProjDesc={curr.description} Techs={curr.technologies} ProjImage={curr.images[0]} webLink={curr.weblink} ImageHandler={ImageTransportHandler} ResetImageHandler={ImageResetTransport} />
                                    })}
                                </ul>
                            </Container>
                        </Col>
                        <Col md={6} className="stky-col p-0 position-sticky top-0 pd-main">
                            <div>
                                <div className="position-relative d-flex justify-content-end ">
                                    {
                                        projData.map((curr, index) => {
                                            return <div key={index} className="sticky_pImages position-absolute pd-image w-100" style={{ backgroundImage: `url(${(typeof curr.images[0] === "undefined") ? dummyImage : curr.images[0]})` }}></div>
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Ipad, Mobile Responsiveness */}
                <Container className="d-block d-xl-none pt-5 pb-5">
                    <h1 className="fw-bolder text-center display-5 mt-4">Our Projects</h1>
                    <p className="fs-5 text-center text-secondary">From Concept to Creation.</p>
                    <Slider {...settings}>
                        {
                            projData.map((curr, index) => {
                                return <ProjectItem key={index} title={curr.title} ProjDesc={curr.description} Techs={curr.technologies} ProjImage={curr.images[0]} webLink={curr.weblink} ImageHandler={ImageTransportHandler} ResetImageHandler={ImageResetTransport} />
                            })
                        }
                    </Slider>
                </Container>
            </section>
        </>
    );
}

export default Projects