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
    },[emailToBeDisplayedId])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-9 col-lg-10">
                    <p className="fs-5 fw-bold mt-2 mb-0">{emailToBeDisplayed ? emailToBeDisplayed.name : ""}</p>
                    <p className="fs-6 fw-bold mb-1">{emailToBeDisplayed ? emailToBeDisplayed.email : ""}</p>
                    <p className="fs-4 fw-bold">{emailToBeDisplayed ? emailToBeDisplayed.subject : ""}</p>
                </div>
                <div className="col-3 col-lg-2 d-flex">
                    <p className="fs-6 fw-bold mt-2 align-self-center">{emailToBeDisplayed ? emailToBeDisplayed.date_created.slice(0, 10).replace(/-/g, "/") : ""}</p>
                </div>
                <div className="emailBody col-12 border-bottom lh-lg">
                    <p className="fs-6">{emailToBeDisplayed ? emailToBeDisplayed.body : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default EmailDisplay