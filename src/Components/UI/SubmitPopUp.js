import React, { useState } from "react";
import './submitPopUp.css'
const SubmitPopUp = () =>{
    return(
        <>
            <div className="sub_popup p-3 rounded bg-success text-white position-fixed mx-2">
                <p className="m-0">Request has been submitted successfuly!</p>
            </div>
        </>
    );
}

export default SubmitPopUp;