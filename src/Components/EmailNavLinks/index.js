import { useEffect, useState } from "react"

const EmailNavLinks = ({ emails }) => {

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
        <div className="row px-3 py-3">
            <div className="col-1 d-flex justify-content-between">
                <a className="fw-bold text-decoration-none me-3">Inbox</a>
                
                {!emails && (
                    <p className="fw-bold bg-warning rounded-1 py-0 px-1">0</p>
                )}

                {emails && (
                    <p className="fw-bold bg-warning rounded-1 py-0 px-1">{unRead}</p>
                )}
            </div>
        </div>
    )
}
export default EmailNavLinks