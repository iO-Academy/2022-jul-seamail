import { useEffect, useState } from "react"
import NewEmailNavLink from "../NewEmailNavLink"
import SentEmailsNavLink from "../SentEmailsNavLink"

const EmailNavLinks = ({
    emails,
    setNewEmailVisible,
    newEmailVisible,
    setSentNavActive,
    sentNavActive,
    sideNavVisible,
    setSideNavVisible, 
    screenWidth,
    setInboxColorActive,
    inboxColorActive,
    setNewEmailColorActive,
    newEmailColorActive
}) => {

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

    const handleClick = () => {
        setSentNavActive(false)
        setInboxColorActive(true);
        console.log(inboxColorActive)
    }

    let baseStyles = "row ps-2 pe-3 py-3"

    return (
        <>
        <NewEmailNavLink 
         setNewEmailVisible={setNewEmailVisible}
         newEmailVisible={newEmailVisible}
         setNewEmailColorActive={setNewEmailColorActive}
         newEmailColorActive={newEmailColorActive}
         setSideNavVisible={setSideNavVisible}
         sideNavVisible={sideNavVisible} 
         screenWidth={screenWidth}
         />
        <div className={inboxColorActive ? (baseStyles + ' link-active ') : baseStyles}>
            <div className="col-2 d-flex justify-content-between">
                <a onClick={handleClick} className="fw-bold text-decoration-none me-3">Inbox</a>
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