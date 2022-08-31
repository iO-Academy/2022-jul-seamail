import { useState } from "react"

const NewEmailForm = ({setSideNavVisible, sideNavVisible}) => {

    const [emailAddressValid, setEmailAddressValid] = useState(null)
    const [emailSubjectValid, setEmailSubjectValid] = useState(null)
    
    const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const validateEmail = (e) => {
        let emailAdresses = e.target.value.split(' ')
            emailAdresses.forEach(emailAddress => {
                if(!emailAddress.match(validEmail) || emailAddress == '' ) {
                    setEmailAddressValid(false) 
                   
                } else {
                    setEmailAddressValid(true)
                }
                console.log(emailAddressValid)
            })
        }
    
    const validateSubject = (e) => {
        if(e.target.value === ''){
            setEmailSubjectValid(false)
        } else {
            setEmailSubjectValid(true)
        }
    }

    return (

        <form className="col bg-white border p-5">
            <div className="mb-4">
                <input onBlur={validateEmail} className="col form-control mb-2" name="to" type="text" id="to" placeholder="To"></input>
                <span className='text-danger'>{emailAddressValid === false ? "Invalid email address. Multiple addresses must be seperated by a space" : ''}</span>
            </div>
            <div className="mb-4">
                <input onBlur={validateSubject} className="col form-control" name="subject" type="text" id="subject" placeholder="Subject"></input>
                <span className='text-danger'>{emailSubjectValid === false ? 'Email subject empty, send anyway?' : ''}</span>
            </div>
            <div className="input-group mb-4">
                <textarea className="form-control" aria-label="With textarea" placeholder="Write your email here"></textarea>
            </div>
        </form>
    )
    
    
}

export default NewEmailForm