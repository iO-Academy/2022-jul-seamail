const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read, bodyPreview }) => {

    const applyStyles = () => {
        if (read) {
            return "read text-bg-light"
        } else {
            return "unRead text-bg-secondary "
        }
    }

    return (
        <div className={"border p-3 " + applyStyles()}>
            <div className="row">
                <h5 className="col-6">{name}</h5>
                <h6 className="col-6 text-end">{dateCreated.slice(0, 10)}</h6>
            </div>
            <p>{subject}</p>
            <p>{bodyPreview}</p>
        </div>
    )
}

export default EmailPreview