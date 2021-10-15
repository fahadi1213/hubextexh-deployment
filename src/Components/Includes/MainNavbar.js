import React, { useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import HubexLogo from '../../Images/logo.png'
import EButton from '../UI/Button';
//Custom Stylesheet
import './MainNavbar.css';
//Font Awesome Icons

const MainNavbar = () => {
    let navlinks = null
    let sections = null;
   const callBackFunction = () => {
        //On Scroll changing the navlinks activeness
        navlinks = document.querySelectorAll('.nav-links-main');
        sections = document.querySelectorAll('.navlinks-section')

    }
    callBackFunction();
    //Handler 
    const navlinksActiveHandler = () =>{
        let current = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop - 100;
            if(window.pageYOffset >= sectionTop){
                current = section.getAttribute('id');
            }
        });

        navlinks.forEach((navlink) =>{
            navlink.classList.remove('active-main');
            if(navlink.classList.contains(current)){
                navlink.classList.add('active-main')

            }
        })
    }
    window.addEventListener('scroll',navlinksActiveHandler);
    const sideOverlay = useRef(null);
    const openSidebar = () => {
        sideOverlay.current.style.transform = 'translateX(0%)';
    }
    const closeSideBar = () => {
        sideOverlay.current.style.transform = 'translateX(-100%)';
    }
    //Sticky Navbar]
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavClasses('py-2 navbar-main position-fixed top-0 nav-bg w-100')
        }
        else {
            setNavClasses('py-2 navbar-main')
        }
    }
    const scrollIntoViewHandler = (id) => {
        //This closeSideBar function is just for mobile devices
        //It will help us when a user is on mobile device and open the sidebar 
        //and then click on clicks then the navbar will be close and scroll to the desired section. 
        closeSideBar();
        const anchor = document.getElementById(id);
        const yOffset = -500;
        const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({ behavior: "smooth", top: y })
    }
    const [navClasses, setNavClasses] = useState('py-4 navbar-main');
    window.addEventListener('scroll', handleScroll)






    return (
        <div className="sticky">
            <Navbar expand="lg" className={navClasses} >
                <Container>
                    <a href="#/" className="w-50"><img src={HubexLogo} className="img-fluid" width="180px" alt="logo" /></a>
                    <button className="bg-transparent border-0 nav-menu-btn d-lg-none" onClick={openSidebar}>
                        <i className="fas fa-bars nav-menu_icon fs-3"></i>
                    </button>
                    <Navbar.Toggle className="d-none" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="nav-links-main homeNav" onClick={() => scrollIntoViewHandler('homeNav')}>Home</Nav.Link>
                            <Nav.Link className="nav-links-main servicesNav-main" onClick={() => scrollIntoViewHandler('servicesNav-main')} >Services</Nav.Link>
                            <Nav.Link className="nav-links-main costNav-main" onClick={() => scrollIntoViewHandler('costNav-main')} >Request</Nav.Link>
                            <Nav.Link className="nav-links-main projNav-main" onClick={() => scrollIntoViewHandler('projNav-main')} >Portfolio</Nav.Link>
                            <Nav.Link className="nav-links-main cntctNav-main" onClick={() => scrollIntoViewHandler('cntctNav-main')} >Contact</Nav.Link>
                            <Nav.Link className="nav-links-main ">Careers</Nav.Link>
                        </Nav>
                        <EButton width="8rem" bgColor="#01B9DA" primary color="white" className="mx-2 gt-btn" onClick={() => scrollIntoViewHandler('footerNav')}>Get in Touch</EButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* Sidebar overlay */}

            <div className="side-overlay p-3 shadow-sm" ref={sideOverlay}>
                <div className="d-flex align-items-center justify-content-between">
                    <a href="#/"><img src={HubexLogo} alt="logo" width="140px" /></a>
                    <button className="so-cncl_btn bg-transparent border-0" onClick={closeSideBar}><i className="fas fa-times fs-5 so-cncl_icon"></i></button>
                </div>
                <div className="p-5 so-main">
                    <div className="so-list d-flex flex-column">
                        <span><Nav.Link onClick = {() => scrollIntoViewHandler('homeNav')} className="side-navLinks">Home</Nav.Link></span>
                        <span><Nav.Link onClick = {() => scrollIntoViewHandler('servicesNav-main')} className="side-navLinks">Services</Nav.Link></span>
                        <span><Nav.Link onClick = {() => scrollIntoViewHandler('servicesNav-main')} className="side-navLinks">Careers </Nav.Link></span>
                    </div>
                    <p className="ms-4 mt-5">It's not just what it looks like and <br />feel like. Design is how it works.</p>
                    <p className="text-start mt-3 ms-4 fw-bolder text-uppercase">Steve Jobs</p>
                </div>
            </div>
        </div>
    );
}
export default MainNavbar;