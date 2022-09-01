import EmailPreview from "../EmailPreview"
import NoEmails from "../NoEmails"
import "./styles.scss"

const EmailList = ({ getEmails, emails, emailToBeDisplayedId , setEmailToBeDisplayedId, emailDisplayVisible, setEmailDisplayVisible, screenWidth, emailToBeDisplayed, setEmailToBeDisplayed}) => {

    const displayEmailPreviews = (emails) => {
        if (!emails || emails.length === 0) {
           return <NoEmails />
        } else if (emails) {
            return (<>{emails.map((email) => (
                <EmailPreview
                    key={email.id}
                    getEmails={getEmails}
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
                    emailToBeDisplayed={emailToBeDisplayed}
                    setEmailToBeDisplayed={setEmailToBeDisplayed}
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