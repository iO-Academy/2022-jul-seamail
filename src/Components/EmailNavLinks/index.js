import { useEffect, useState } from "react"
import NewEmailNavLink from "../NewEmailNavLink"
import SentEmailsNavLink from "../SentEmailsNavLink"

const EmailNavLinks = ({
    emails,
    setNewEmailVisible,
    newEmailVisible,
    setSentNavActive,
    sentNavActive,
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
        setInboxColorActive(true)
        setNewEmailColorActive(false)
        setNewEmailVisible(false)
    }

    let baseStyles = "row ps-2 pe-3 py-3 side-nav-links"

    return (
        <>
        <NewEmailNavLink 
         setNewEmailVisible={setNewEmailVisible}
         newEmailVisible={newEmailVisible}
         setNewEmailColorActive={setNewEmailColorActive}
         newEmailColorActive={newEmailColorActive}
         setInboxColorActive={setInboxColorActive}
         setSentNavActive={setSentNavActive}
         />
        <div className={inboxColorActive ? (baseStyles + ' link-active ') : baseStyles}>
            <div className="col-2 d-flex justify-content-between">
                <a onClick={handleClick} className="fw-bold text-decoration-none me-3">Inbox</a>
                <p className="fw-bold bg-warning rounded-1 py-0 px-1">{emails ? unRead : "0"}</p>
            </div>
        </div>
        <SentEmailsNavLink 
            setSentNavActive={setSentNavActive} 
            sentNavActive={sentNavActive} 
            setInboxColorActive={setInboxColorActive}
            setNewEmailColorActive={setNewEmailColorActive}
            setNewEmailVisible={setNewEmailVisible}
        />
        </>
    )
}
export default EmailNavLinks