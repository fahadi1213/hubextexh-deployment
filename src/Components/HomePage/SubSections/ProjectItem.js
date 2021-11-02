import React from "react";
import './PorjectItem.css';
import InView from "react-intersection-observer";
const ProjectItem = (props) => {

    const onChangeHandler = (isVisible) => {
        isVisible ? props.ImageHandler() : props.ResetImageHandler()
    }
    return (
        <>

            <div className="proj-cont shadow">
                <img src={props.ProjImage} className="p-images d-block d-xl-none w-100" alt="pImage" />
                <InView onChange={onChangeHandler}>
                    <div className="p-3">
                        <a href={props.webLink} className="text-decoration-none text-black" target="_blank" rel="noreferrer"><h3 className=" pTitle">{props.title}</h3></a>
                        <div className="my-5 d-flex flex-wrap">
                            {/* Technologies objects array rendring */}
                            {
                                props.Techs.map((element, index) => {
                                    return <span className="proj-tech me-2 my-1 " key={index}>{element.title}</span>
                                })
                            }
                        </div>
                        <div>
                            <p className="mt-5 mb-3 fw-lighter pcard-text ">{props.ProjDesc}</p>
                            <div className="d-flex align-items-center">
                                <p className="text-uppercase m-0 text-decoration-underline text-secondary">case study</p>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer"><button className="btn-for fs-5"><i className="fas fa-angle-right"></i></button></a>
                            </div>
                        </div>
                    </div>
                </InView>
            </div>

        </>
    );
}
export default ProjectItem;