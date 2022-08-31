import { useState, useEffect } from 'react';
import './styles.scss';

const EmailDisplay = ({ emails, emailToBeDisplayedId }) => {

    const [emailToBeDisplayed, setEmailToBeDisplayed] = useState(null)

    const getEmailToBeDisplayed = () => {
        fetch ("http://localhost:8080/emails")
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
        console.log(emailToBeDisplayedId)
        console.log(emailToBeDisplayed)
    },[emailToBeDisplayedId])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-9 col-lg-10">
                    <p className="fs-5 fw-bold mt-2 mb-0">Maria Smith</p>
                    <p className="fs-6 fw-bold mb-1">maria.smith@fakecompany.com</p>
                    <p className="fs-4 fw-bold">Hello world</p>
                </div>
                <div className="col-3 col-lg-2 d-flex">
                    <p className="fs-6 fw-bold mt-2 align-self-center">23/07/2022</p>
                </div>
                <div className="emailBody col-12 border-bottom lh-lg">
                    <p className="fs-6">Hello world,</p>
                    <p className="fs-6">This is my first email.</p>
                    <p className="fs-6">I am looking forward to speaking with you.</p>
                    <p className="fs-6">Could you please click this link and schedule a time and date for our call?</p>
                    <p className="fs-6">If you have any questions about the call, just reply to this email. I will get back to you ASAP.</p>
                    <p className="fs-6">Thank you,</p>
                    <p className="fs-6">Maria</p>
                </div>
            </div>
        </div>
    )
}

export default EmailDisplay