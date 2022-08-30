const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read }) => {

    return (
        <>
            <p>{name}</p>
            <p>{dateCreated}</p>
            <p>{subject}</p>
        </>
    )
}

export default EmailPreview