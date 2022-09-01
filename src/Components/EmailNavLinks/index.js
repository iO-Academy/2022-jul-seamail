import { useEffect, useState } from "react"
import NewEmailNavLink from "../NewEmailNavLink"
import SentEmailsNavLink from "../SentEmailsNavLink"

const EmailNavLinks = ({ emails, setNewEmailVisible, newEmailVisible, setSentNavActive, sentNavActive, sideNavVisible, setSideNavVisible, screenWidth}) => {

    const [unRead, setUnRead] = useState(0)

    const countUnreadEmails = (emails) => {
        let unReadEmails = emails.filter((email) => email.read == "0")
        setUnRead(unReadEmails.length) 
    }

    useEffect(() => {
        if(emails){
            countUnreadEmails(emails)
        }
    })

    return (
        <>
        <NewEmailNavLink 
         setNewEmailVisible={setNewEmailVisible}
         newEmailVisible={newEmailVisible}
         setSideNavVisible={setSideNavVisible}
         sideNavVisible={sideNavVisible} 
         screenWidth={screenWidth}/>
        <div className="row ps-2 pe-3 py-3">
            <div className="col-2 d-flex justify-content-between">
                <a className="fw-bold text-decoration-none me-3">Inbox</a>
                <p className="fw-bold bg-warning rounded-1 py-0 px-1">{emails ? unRead : "0"}</p>
            </div>
        </div>
        <SentEmailsNavLink 
            setSentNavActive={setSentNavActive} 
            sentNavActive= {sentNavActive} 
            screenWidth={screenWidth}/>
        </>
    )
}
export default EmailNavLinks