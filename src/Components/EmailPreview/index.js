const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read }) => {

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
                <h4 className="col-6">{name}</h4>
                <h5 className="col-6 text-end">{dateCreated.slice(0, 10)}</h5>
            </div>
            <h6>{subject}</h6>
        </div>
    )
}

export default EmailPreview