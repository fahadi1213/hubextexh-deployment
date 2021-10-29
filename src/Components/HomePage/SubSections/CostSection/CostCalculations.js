import React from 'react';
import EButton from '../../../UI/Button';

const CostCalculations = (props) => {
    const costData = props.Data;
    const scrollIntoViewHandler = (id) =>{
        const anchor = document.getElementById(id);
        const yOffset = -500;
        const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})
    }
    return (
        <>
            <div className="choice-sub h-100 w-100 rounded d-flex flex-column align-items-center justify-content-center" >
                <div className="st-main d-flex align-items-center bg-white rounded px-4 py-3 my-2">
                    <p>Specialist Type :</p>
                    <p>{costData.spType}</p>
                </div>
                <div className="st-main d-flex align-items-center bg-white rounded px-4 py-3 my-2">
                    <p>Cognition Level :</p>
                    <p>{costData.clType}</p>
                </div>
                <div className="et-main d-flex align-items-center bg-white rounded px-4 py-3 my-2">
                    <p>Employment Term :</p>
                    <p>{costData.ePeriod}</p>
                </div>
                <div className="tc-main d-flex align-items-center bg-white rounded px-4 py-3 my-2">
                    <p>Total Cost :</p>
                    <p>${props.totalPrice}</p>
                </div>
                <div className="my-5 d-flex flex-column align-items-center w-100">
                    <EButton width="10rem" primary bgColor="#01B9DA" color="white" className="dp-btn my-1 d-none d-sm-block" onClick={props.AnimFunction}>Estimate Project</EButton>
                    <EButton width="11rem" primary bgColor="#01B9DA" color="white" className="dp-btn my-1 d-sm-none d-block" onClick={() => scrollIntoViewHandler('costNav-main')}>Estimate Project</EButton>
                </div>
            </div>
        </>
    );
}

export default CostCalculations