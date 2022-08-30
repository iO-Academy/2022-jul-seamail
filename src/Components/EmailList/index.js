import EmailPreview from "../EmailPreview"
import NoEmails from "../NoEmails"
import "./styles.scss"

const EmailList = ({ emails }) => {
    return (
        <div className="listContainer vh-100 overflow-auto">
            {
                !emails &&
                <NoEmails />
            }

            {
                emails &&
                (<>{emails.map((email) => (
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
        </div>
    )
}

export default EmailList