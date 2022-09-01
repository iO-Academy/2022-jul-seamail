import { useState, useEffect } from 'react';
import CloseButton from '../CloseButton';
import './styles.scss';

const EmailDisplay = ({ emailToBeDisplayedId, emailDisplayVisible, setEmailDisplayVisible, screenWidth, emailToBeDisplayed, setEmailToBeDisplayed }) => {

    const getEmailToBeDisplayed = () => {
        fetch (`${process.env.REACT_APP_API_URL}/emails`)
        .then(data => data.json())
        .then((responses) => {
            responses.data.map((response) => {
                if(response.id == emailToBeDisplayedId) {
                    setEmailToBeDisplayed(response)
                }
            })
        }
    )
}

    useEffect(() => {
        getEmailToBeDisplayed()
    },[emailToBeDisplayedId])
    
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="m-0 text-end px-3">
                        <CloseButton 
                            emailDisplayVisible={emailDisplayVisible} 
                            setEmailDisplayVisible={setEmailDisplayVisible} 
                        />
                    </div>
                </div>
                <div className="d-flex col-12 col-lg-10 justify-content-between">
                    <p className="fs-5 fw-bold mt-0 mb-0">{emailToBeDisplayed ? emailToBeDisplayed.name : ""}</p>
                    <p className="fs-6 fw-bold mt-0 align-self-center">{emailToBeDisplayed ? emailToBeDisplayed.date_created.slice(0, 10).replace(/-/g, "/") : ""}</p>
                </div>
                <div>
                    <p className="fs-6 fw-bold mb-1">{emailToBeDisplayed ? emailToBeDisplayed.email : ""}</p>    
                </div> 
                <div>   
                    <p className="fs-4 fw-bold">{emailToBeDisplayed ? emailToBeDisplayed.subject : ""}</p>
                </div>
                <div className="emailBody col-12 border-bottom lh-lg">
                    <p className="fs-6">{emailToBeDisplayed ? emailToBeDisplayed.body : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default EmailDisplay