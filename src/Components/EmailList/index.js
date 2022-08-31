import EmailPreview from "../EmailPreview"
import NoEmails from "../NoEmails"
import NewEmailForm from "../NewEmailForm"
import "./styles.scss"

const EmailList = ({ emails }) => {

    const displayEmailPreviews = (emails) => {
        if (!emails || emails.length == 0) {
           return <NoEmails />
        } else if (emails) {
            return (<>{emails.map((email) => (
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
            ))} </>)
        }
    }

    return (
        <>
        <div>
            <NewEmailForm />
        </div>
        <div className="listContainer vh-100 overflow-auto">
            {displayEmailPreviews(emails)}
        </div>
        </>
    )
}

export default EmailList