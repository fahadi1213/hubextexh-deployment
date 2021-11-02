import React, { useState, useEffect } from "react";
import ResumeHeroSection from "./Subsections/ResumeHeroSection";
import "./Resume.css";
import SideMenu from "./Includes/SideMenu";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { useParams } from "react-router";

function Resume() {

    let {fullname,dob,uuId} = useParams();
    console.log(fullname,dob,uuId)

    //set the data in constant for use the data from parent to child
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {

        const fetchingData = async () => {
            try {
                const data = await resumeDataHandler();
                setResumeData(data[0]);
            } catch (err) {
                console.log("could not find the response:", err);
            }
        };
        fetchingData();
    });

    //Handling the side bar open on click event
    const [sbOpen, setSbOpen] = useState(false);
    const SideBarHandler = () => {
        setSbOpen(true);
    };

    const closeSidebarHandler = () => {
        setSbOpen(false);
    };

    const resumeDataHandler = async () => {
        const baseURL = "https://d232-72-255-21-77.ngrok.io/api/v1/resumes";
        const response = await axios.get(baseURL, {
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY,
            },
            params: {
                name:fullname,
                dob:dob,
                id: uuId,
            },
        });
        
        return response.data;
    };
        if (!resumeData) return null;

    return (
        <>
            <div className="d-flex">
                <SideMenu
                    SideMenuRespData={resumeData}
                    OpenSideBarHandler={sbOpen}
                    CloseSidebarHandler={closeSidebarHandler}
                />
                <ResumeHeroSection
                    ResumeRespData={resumeData}
                    SidebarOpen={SideBarHandler}
                />
            </div>
        </>
    );
}

export default Resume;
