import { useEffect, useState } from "react"

const EmailNavLinks = ({ emails }) => {

    const [unRead, setUnRead] = useState(0)

    const countUnreadEmails = (emails) => {
        let unReadEmails = emails.filter((email) => email.read === "0")
        setUnRead(unReadEmails.length) 
    }

    useEffect(() => {
        if(emails){
            countUnreadEmails(emails)
        }
    })

    return (
        <div className="row ps-3 pe-5 py-3">
            <div className="col-1 d-flex justify-content-between">
                <a href="" className="fw-bold text-decoration-none me-3">Inbox</a>
                <p className="fw-bold bg-warning rounded-1 py-0 px-1">{emails ? unRead : "0"}</p>
            </div>
        </div>
    )
}

export default EmailNavLinks