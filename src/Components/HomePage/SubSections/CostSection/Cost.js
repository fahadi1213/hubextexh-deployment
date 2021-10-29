import React, {useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import EButton from "../../../UI/Button";
import './Cost.css'
import CostCalculations from "./CostCalculations";
import ContactFrom from './ContactForm'
import ContactForm from "./ContactForm";
import axios from "axios";
import swal from 'sweetalert';
import { VisibilityObserver } from "reactjs-visibility";


const Cost = (props) => {
    //Cost Prices
    const costPrices = {
        frontend: 5,
        backend: 8,
        fullstack: 10,
        ui: 7,
        junior: 7,
        middle: 10,
        senior: 12
    }
    //Prices States
    // const [spPrice, setSpPrice] = useState(costPrices.frontend);
    // const [clPrice, setClPrice] = useState(costPrices.middle);
    // const [epPrice, setEpPrice] = useState(2);


    //Animation Operation of Cost Section
    const dp = useRef(null);
    const cp = useRef(null);
    const crMain = useRef(null);
    const cntctMain = useRef(null)
    const cDetails = useRef(null);
    const overlay = () => {
        dp.current.classList.add('right-overlay_anim',)
        cp.current.classList.add('left-overlay_anim')
        cntctMain.current.classList.add('cntct-form_anim')
        crMain.current.classList.add('cr-main_anim')
        cDetails.current.classList.add('choiceDetails_anim')

    }
    const offOverlay = () => {
        dp.current.classList.remove('right-overlay_anim')
        cp.current.classList.remove('left-overlay_anim')
        cntctMain.current.classList.remove('cntct-form_anim')
        crMain.current.classList.remove('cr-main_anim')
        cDetails.current.classList.remove('choiceDetails_anim')
    }

    


    const [clickUpPrices,setClickUpPrices] = useState({
        first:costPrices.frontend,
        second:costPrices.middle,
        third:2
    }) 

    const [costData, setCostData] = useState({
        spType: 'Front-End',
        clType: 'Middle',
        ePeriod: '6-12 months',
    })
    //Setting the State for Total Price
    const totalCalPrice = (clickUpPrices.first * clickUpPrices.second) - clickUpPrices.third;
    const [initialCostPrice,setInitialCostPrice] = useState(48)

    const [contactFromData, setContactFromData] = useState({})

    const spActive = useRef(null)
    const clActive = useRef(null)
    const epActive = useRef(null)
    const costChangeHandler = (e) => {
        if (e.target.classList.contains('sp-type_btn')) {
            //First we have to uncheck the existing checked button
            spActive.current.classList.remove('checked')
            spActive.current = e.target;
            e.target.classList.add('checked');
            const spValue = e.target.textContent;
            const name = e.target.name;
            // We need to store the selected value
            changeData('spType', spValue)
            // We need to change the rate as per selection of user
            setClickUpPrices(prev =>{
                return{
                    ...prev,
                    first:costPrices[name]
                }
            })
            
        }
        else if (e.target.classList.contains('cl_btn')) {
            //First we need to unfocus the already selected button
            clActive.current.classList.remove('checked')
            clActive.current = e.target;
            e.target.classList.add('checked');
            const clValue = e.target.textContent;
            const name = e.target.name;
            // We need to store the selected value
            changeData('clType', clValue)
            // We need to change the rate as per selection of user
            setClickUpPrices(prev =>{
                return{
                    ...prev,
                    second:costPrices[name]
                }
            })
            
        }
        else if (e.target.classList.contains('ep_btn')) {
            //First we need to unfocus the already selected button
            epActive.current.classList.remove('checked')
            epActive.current = e.target;
            e.target.classList.add('checked');
            const epValue = e.target.textContent;
            const value = e.target.value;
            // We need to store the selected value
            changeData('ePeriod', epValue)
            // We need to change the rate as per selection of user
            setClickUpPrices(prev =>{
                return{
                    ...prev,
                    third:value
                }
            })
            

        }

    }



    const changeData = (key, value) => {
        setCostData((prevData) => {
            return {
                ...prevData,
                [key]: value
            }
        })
    }

    const apiCostDataPostingHandler = async () => {
        const baseURL = "https://3768-72-255-21-77.ngrok.io/api/v1/leads";
        const response = await axios.post(baseURL, {
            full_name: contactFromData.exampleName,
            email: contactFromData.exampleEmail,
            message: contactFromData.exampleMessage,
            developer_type: costData.spType,
            experience_level: costData.clType,
            emp_duration: costData.ePeriod,
            total_cost: totalCalPrice
        },
            {
                headers: {
                    "Authorization": process.env.REACT_APP_AUTH_KEY
                }
            });

        return response;


    }

    const postDataHandler = () => {
        apiCostDataPostingHandler().then(() => {
            swal("Thank you!", "Request has been submitted successfuly", "success");
        }).catch(err => {
            console.log("could not be able to send cost and contact data:", err)

        })
    }

    const onGetContactFormDataHandler = (data) => {
        setContactFromData(data)
    }
    const animateNumber = (start,end,obj) =>{
        if (start === end) {
            return;
        }
        else {

            if (start > end) {
                setInitialCostPrice(end)
                let myInterval = setInterval(() =>{

                    start = start - 1;
                    obj.current.innerHTML = `$${start}`;
                    if(start === end){
                        clearInterval(myInterval);
                    }
                },40)

            }else{
                setInitialCostPrice(end)
                let myInterval = setInterval(() =>{
                    start = start + 1;
                    obj.current.innerHTML = `$${start}`;
                    if(start === end){
                        clearInterval(myInterval);
                    }
                },40)
            }
        }
    }
    const tpTag = useRef(null);
    function animateValue(obj, start, end) {
        animateNumber(start,end,obj)
    }
    animateValue(tpTag, initialCostPrice, totalCalPrice)


    //Visibility Checker of the component
    const onChangeHandler = (isVisible) => {
        isVisible ? props.VisibilityHandler():props.VisibilityResetHandlerCost()
    }

    return (
        <>
        <VisibilityObserver onChangeVisibility={onChangeHandler}>
            <div className="cost-main_cont navlinks-section" id="costNav-main">
                <div className="">
                    <Row className="mx-0">
                        <Col md={6} className="p-0 position-relative bg-white">
                            <div className="cost-left container d-flex justify-content-center  h-100" ref={cp} >
                                <div className="cl-main" >
                                    <div className="mt-4 mb-5 res-cost-heading">
                                        <h1>Cost Per Dev</h1>
                                        <p>Specify your requirements to a potential candidate to see the average rate</p>
                                    </div>
                                    <div className="cost-btns-pills" onClick={costChangeHandler}>
                                        <div>
                                            <h5 className="my-3">Specialist type</h5>
                                            <button className="sp-type_btn checked" name="frontend" ref={spActive}>Front-End</button>
                                            <button className="sp-type_btn" name="backend">Back-End</button>
                                            <button className="sp-type_btn" name="fullstack">Full-Stack</button>
                                            <button className="sp-type_btn" name="ui">UI UX</button>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Cognition level</h5>
                                            <div className="cl-main">
                                                <button className="cl_btn" name="junior">Junior</button>
                                                <button className="cl_btn checked" name="middle" ref={clActive}>Middle</button>
                                                <button className="cl_btn" name="senior">Senior</button>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Employment term</h5>
                                            <div className="ep-main">
                                                <button className="ep_btn ep_btn-active" value="0">1-3 months</button>
                                                <button className="ep_btn" value="1">3-6 months</button>
                                                <button className="ep_btn checked" value="2" ref={epActive}>6-12 months</button>
                                                <button className="ep_btn" value="3">1 year +</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choiceDetails position-absolute w-100 h-100 top-0 px-5 py-3 d-flex flex-column justify-content-center align-items-center" ref={cDetails}>
                                <CostCalculations Data={costData} totalPrice={totalCalPrice} AnimFunction={offOverlay} />
                            </div>
                            <div className="cntct-form position-absolute w-100 h-100 top-0 p-5 d-flex justify-content-center align-items-center" ref={cntctMain}>
                                <div className="position-relative">
                                    <ContactFrom cntctMain={cntctMain} ContactFormData={onGetContactFormDataHandler} ContactFormSubmitCallHandler={postDataHandler} />
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="p-0 position-relative d-flex justify-content-end align-items-center cost-right_costs d-none d-sm-block" ref={dp}>
                            <div className="p-5 text-center w-100 h-100 d-flex justify-content-center">
                                <div className="cr-main d-flex flex-column justify-content-center px-5 rounded" ref={crMain}>
                                    <p>Average rate per employee</p>
                                    <h1 className="display-1 fw-bold my-5" ref={tpTag}>$48</h1>
                                    <EButton bgColor="#FFFF" primary onClick={overlay} className="dp-btn" >Discuss Partnership</EButton>
                                </div>
                            </div>
                        </Col>

                        {/* Mobile Responsiveness */}
                        <Col className="d-sm-none d-block p-0">
                            <div className="choiceD_resp p-3 d-flex justify-content-around align-items-center">
                                <CostCalculations Data={costData} totalPrice={totalCalPrice} AnimFunction={offOverlay} />
                            </div>
                            <div className="mx-2 py-5 px-3">
                                <ContactForm cntctMain={cntctMain} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </VisibilityObserver>
        </>
    );
}

export default Cost;