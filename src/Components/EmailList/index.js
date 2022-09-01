import EmailPreview from "../EmailPreview"
import NoEmails from "../NoEmails"
import NewEmailForm from "../NewEmailForm"
import "./styles.scss"
import { useEffect, useState } from "react";

const EmailList = ({ 
    emails, 
    newEmailVisible, 
    setNewEmailVisible, 
    sentEmails, 
    setSentEmails, 
    setSentNavActive, 
    sentNavActive,
    setInboxColorActive,
    setNewEmailColorActive
}) => {

    const displayEmailPreviews = (emails, sentEmails, sentNavActive) => {
            if (!emails || emails.length === 0) {
                return <NoEmails />
            } else if (emails) {
                return (
                    <>
                        {emails.map((email) => (
                            <EmailPreview
                                key={email.id}
                                id={email.id}
                                name={email.name}
                                emailAddress={email.email}
                                subject={email.subject}
                                dateCreated={email.date_created}
                                read={email.read}
                                bodyPreview={email.body}
                            />
                        ))} 
                    </>
                )
            }
        }

    return (
        <>

         {newEmailVisible &&
        <div className="position-absolute col-lg-6 col-12 vh-100">
            <NewEmailForm 
                setNewEmailVisible={setNewEmailVisible}
                newEmailVisible={newEmailVisible}
                setNewEmailColorActive={setNewEmailColorActive}
                setInboxColorActive={setInboxColorActive}
                setSentNavActive={setSentNavActive}   
                />
        </div>
        }
        <div className="listContainer vh-100 overflow-auto">
            {displayEmailPreviews(emails)}
        </div>
        </>
    )
}

export default EmailList