import React from "react";
import './PorjectItem.css';
const ProjectItem = (props) => {
    return (
        <>
            <div className="proj-cont">
                <img src={props.ProjImage} className="p-images d-xl-block d-xxl-none w-100" alt="pImage" />
                <h3 className="text-white pTitle">{props.title}</h3>
                <div className="my-5 d-flex flex-wrap">
                    {
                        props.Techs.map((element,index) => {
                            return <span className="proj-tech me-2 my-1 text-white" key={index}>{element}</span>
                        })
                    }
                </div>
                <p className="mt-5 mb-3 text-white fw-lighter pcard-text ">{props.ProjDesc}</p>
                <button className="btn-for fs-4 px-4"><i className="fas fa-angle-right"></i></button>
            </div>
        </>
    );
}

export default ProjectItem;