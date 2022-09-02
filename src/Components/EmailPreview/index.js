import { useState } from "react"

const EmailPreview = ({ 
    getEmails,
    getSentEmails, 
    id, 
    name, 
    subject, 
    dateCreated, 
    read, 
    bodyPreview, 
    emailToBeDisplayed,
    sentNavActive, 
    setEmailToBeDisplayedId, 
    setEmailDisplayVisible 
}) => {
    const [emailRead, setEmailRead] = useState(read)

    const selectedStyles = () => {
        if (emailToBeDisplayed && emailToBeDisplayed.id === id ) {
            return " text-white bg-primary"
        } 
    }

    const updateReadValue = () => {
            fetch(`${process.env.REACT_APP_API_URL}/emails/${id}`, {
                method: 'PUT',
            })
            .then(data => data.json())
            .then((response) => {
                if(response.data.updated) {
                    if(!sentNavActive){
                        setEmailRead('1')
                        getEmails()
                    } else {
                        getSentEmails()
                        
                    }
                }
            })
        }

    const handleClick = () => {
        setEmailToBeDisplayedId(id)
        setEmailDisplayVisible(true)
        updateReadValue()
    }

    return (

        <div 
            onClick={handleClick} 
            data-id={id} 
            className={"border p-3 " + (emailRead === '1' ? "read text-bg-light" : "unRead text-bg-secondary ") + selectedStyles()}
        >
            <div className="row">
                <h5 className="col-6 mb-2">{name}</h5>
                <h6 className="col-6 text-end mb-2">{dateCreated.slice(0, 10).replace(/-/g, "/")}</h6>
            </div>
            <p className="mb-2">{subject}</p>
            <p className="mb-2">{bodyPreview}</p>
        </div>
    )
}

export default EmailPreview