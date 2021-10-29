import React, { useRef, useState} from "react";
import { Nav } from "react-bootstrap";
import "./SideMenu.css";
import ResumeFooter from "./ResumeFooter";
import placeHolder from '../../../Images/placeholder.jpg'
const  SideMenu = (props) => {

    const responseData = props.SideMenuRespData;

    //Handler 
    const sideNavLinksActiveHandler = () =>{
        const sideNavLinks = document.querySelectorAll('.side-nav-links-main');
        const sideNavSections = document.querySelectorAll('.side-nav-links-section');
        let current = '';
        
        sideNavSections.forEach(section => {

            const sectionTop = section.offsetTop - 10;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }

        });

        sideNavLinks.forEach((navlink) => {
            navlink.classList.remove('side-nav-active');
            if (navlink.classList.contains(current)) {
                navlink.classList.add('side-nav-active')

            }
        })
    }
    window.addEventListener('scroll', sideNavLinksActiveHandler);

    const sideNavbarOverlay = useRef(null);
    const openSidebar = () => {
        sideNavbarOverlay.current.style.transform = 'translateX(0%)';
    }
    const closeSideBar = () => {
        sideNavbarOverlay.current.style.transform = 'translateX(-100%)';
        props.CloseSidebarHandler();
    }

    //Navbar open-button Click Handler using props
    props.OpenSideBarHandler && openSidebar();


    const scrollIntoViewHandler = (id) => {

        const anchor = document.getElementById(id);
        const yOffset = -500;
        const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({ behavior: "smooth", top: y })
    }


    //When the Enity Image is not present we call the following statement to replace the empty space with a dumy image
    const [replaceAbleImage,setReplaceAbleImage] = useState(responseData.picture);
    const onErrorHandler = () =>{
        setReplaceAbleImage(placeHolder);
    }
    !(replaceAbleImage) && onErrorHandler();
    return (
        <>
            <section className="sideMenu-main" >
                <header className="header d-flex flex-column justify-content-between" ref={sideNavbarOverlay}>
                <button className=" d-xl-none bg-transparent border-0" onClick={closeSideBar}><i className="fas fa-times"></i></button>
                    <div className="d-flex flex-column">
                        <div className="profile">
                           <img src={replaceAbleImage} alt="" className="img-fluid rounded-circle w-50 h-auto" />
                            <h1 className="text-light">{responseData.name}</h1>
                        </div>
                        <nav id="side-navbar" className="nav-menu navbar sideNavbar">
                            <ul className="p-0">
                                <li>
                                    <Nav.Link className="side-nav-links-main resume-home" onClick={() => scrollIntoViewHandler('resume-home')}>
                                        <i className="fas fa-home"></i>&nbsp; HOME
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="side-nav-links-main resume-about" onClick={() => scrollIntoViewHandler('resume-about')}>
                                        <i className="fas fa-user"></i>&nbsp; ABOUT
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="side-nav-links-main resume-nav" onClick={() => scrollIntoViewHandler('resume-nav')}>
                                        <i className="fas fa-file"></i>&nbsp; RESUME 
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="side-nav-links-main resume-contact" onClick={() => scrollIntoViewHandler('resume-contact')}>
                                        <i className="fas fa-envelope"></i>&nbsp; CONTACT 
                                    </Nav.Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <ResumeFooter />
                    </div>
                </header>
            </section>
        </>
    );
}

export default SideMenu;
