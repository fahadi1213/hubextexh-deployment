import React, { useState } from 'react';
import EButton from '../../../UI/Button';

const ContactForm = (props) => {

    const [cntctData,setCntctData] = useState({
        exampleName:'',
        exampleEmail:'',
        exampleMessage:'',
    });
    const contactInputsChangeHandler = (e) =>{
        const keyName = e.target.name;
        const keyValue = e.target.value;
        setCntctData((prev) =>{
            return{
                ...prev,
                [keyName]:keyValue
            }
        })
        props.ContactFormData(cntctData)

    }

    const contactDetailsHandler = (e) =>{
        e.preventDefault();
        props.ContactFormSubmitCallHandler();

    }
    return (
        <>
        <form onSubmit = {contactDetailsHandler}>
            <div>
                <div className="res-cost-heading">
                    <h1>Discuss Partnership</h1>
                    <p>Don't hesitate to give us a call or send us a contact form message.</p>
                </div>
                <div>
                    <input className="form-control cntct-input my-2" name="exampleName" type="text" placeholder="Enter your name" aria-label="default input example" required onChange = {contactInputsChangeHandler}/>
                    <input className="form-control cntct-input my-2" name="exampleEmail" type="text" placeholder="Enter your email" aria-label="default input example" required onChange = {contactInputsChangeHandler}/>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="exampleMessage" placeholder="Your message" rows="3" required onChange = {contactInputsChangeHandler}></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <EButton width="10rem" primary bgColor="#01B9DA" color="white" type="submit" className="dp-btn btn-submit-cntct  my-5">Submit</EButton>
                </div>
            </div>
            </form>
        </>
    );
}

export default ContactForm;