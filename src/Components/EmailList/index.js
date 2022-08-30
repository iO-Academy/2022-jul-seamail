import EmailPreview from "../EmailPreview"

const EmailList = ({ emails }) => {
    return (
        <div className="vh-100 overflow-auto">
            {
                !emails &&
                <p>Loading...</p>
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
                    />
                ))} </>)
            }
        </div>
    )
}

export default EmailList