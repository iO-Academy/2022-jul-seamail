import { useState } from "react"
import './style.scss'

const NewEmailForm = ({setSideNavVisible, sideNavVisible}) => {

    const [emailAddressValid, setEmailAddressValid] = useState(null)
    const [emailSubjectValid, setEmailSubjectValid] = useState(null)
    const [emailBodyValid, setEmailBodyValid] = useState(null)
    const [emails, setEmails] = useState('')
    const [subject, setSubject] = useState('')
    const [emailBody, setEmailBody] = useState('')
    const [emailSentSuccess, setEmailSentSuccess] = useState('')
    const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const validateEmail = (e) => {
        let emailAddresses = e.target.value.trim().split(' ')
        emailAddresses.map((emailAddress) => {
            if(!emailAddress.match(validEmail) || emailAddress == '' ) {
                setEmailAddressValid(false)
            } else {
                setEmailAddressValid(true)
            }
        })
    }

    const validateSubject = () => {
        if(subject === ''){
            setEmailSubjectValid(false)
        } else {
            setEmailSubjectValid(true)
        }
    }

    const validateBody = () => {
        if(emailBody === ''){
            setEmailBodyValid(false)
        } else {
            setEmailBodyValid(true)
        }
    }

    const handleEmailChange = (e) => {
        setEmails(e.target.value)
    }

    const handleSubjectChange= (e) => {
        setSubject(e.target.value)
    }

    const handleBodyChange = (e) => {
        setEmailBody(e.target.value)
    }

    const sendEmails = () => {
        let emailAddresses = emails.trim().split(' ')
        emailAddresses.forEach((email) => {
            let dataToSend = {
                "name": "Bob Ross",
                "email": email,
                "subject": subject,
                "body": emailBody,
            }
            fetch('http://localhost:8080/emails', {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(data => data.json())
            .then((response) => {
                console.log(response)
                setEmailSentSuccess(response.data.sent)
            })
        })  
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(emailAddressValid  &&
            emailBodyValid  &&
            emailSubjectValid) {
                sendEmails()
            }
    }

    return (

        <form  onSubmit={handleSubmit} className="col bg-white border p-5">
            <div className="mb-4">
                <input onBlur={validateEmail} value={emails} onChange={handleEmailChange} className="col form-control mb-2" name="to" type="text" id="to" placeholder="To"></input>
                <p className='text-secondary my-0'>Multiple addresses separated by a space</p>
                <span className='text-danger'>{emailAddressValid === false ? "Invalid email address" : ''}</span>
            </div>
            <div className="mb-4">
                <input onBlur={validateSubject} value={subject} onChange={handleSubjectChange} className="col form-control" name="subject" type="text" id="subject" placeholder="Subject"></input>
                <span className='text-danger'>{emailSubjectValid === false ? 'Email subject empty' : ''}</span>
            </div>
            <div className="input-group mb-4">
                <textarea onBlur={validateBody}  onChange={handleBodyChange} value={emailBody} className="form-control emailBody" rows='10' aria-label="With textarea" placeholder="Write your email here"></textarea>
                <div className='text-danger'>{emailBodyValid === false ? 'Email body empty' : ''}</div>
            </div>
            <div className="form-group">
                <input type='submit' id="btn-success" value="Send Email" />
            </div>
                <span className='text-success'>{emailSentSuccess === true ? 'Email Sent' : ''}</span>
        </form>
    )
}

export default NewEmailForm