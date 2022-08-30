import EmailPreview from "../EmailPreview"

const EmailList = ({emails}) => {
    return (
        <>
            {
                !emails &&
                <p>loading</p>
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
        </>
    )
}

export default EmailList