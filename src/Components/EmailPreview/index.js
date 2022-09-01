import './style.scss'

const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read, bodyPreview }) => {

    const applyStyles = () => {
        if (read === "1") {
            return "read text-bg-light"
        } else if (read === "0") {
            return "unRead text-bg-secondary "
        }
    }

    return (
        <div className={"emailPreview border p-3 " + applyStyles()}>
            <div className="row">
                <h5 className="col-6 mb-2">{name}</h5>
                <h6 className="col-6 text-end mb-2">{dateCreated.slice(0, 10).replace(/-/g, "/")}</h6>
            </div>
            <p className="mb-2">{subject}</p>
            <p className="mb-2">{bodyPreview}</p>
        </div>
    )
}

export default EmailPreview