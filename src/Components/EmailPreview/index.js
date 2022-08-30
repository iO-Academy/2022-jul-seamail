const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read }) => {

    return (
        <div>
            <p>{name}</p>
            <p>{dateCreated.slice(0, 10)}</p>
            <p>{subject}</p>
        </div>
    )
}

export default EmailPreview