import EmailPreview from "../EmailPreview"
import NoEmails from "../NoEmails"
import "./styles.scss"

const EmailList = ({ emails, emailToBeDisplayedId , setEmailToBeDisplayedId, emailDisplayVisible, setEmailDisplayVisible, screenWidth}) => {

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
                    setEmailToBeDisplayedId={setEmailToBeDisplayedId}
                    emailToBeDisplayedId={emailToBeDisplayedId}
                    emailDisplayVisible={emailDisplayVisible} 
                    setEmailDisplayVisible={setEmailDisplayVisible}
                    screenWidth={screenWidth}
                />
            ))} </>)
        }
    }

    return (
        <div className="listContainer vh-100 overflow-auto">
            {displayEmailPreviews(emails)}
        </div>
    )
}

export default EmailList