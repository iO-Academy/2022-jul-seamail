const EmailPreview = ({ id, name, emailAddress, subject, dateCreated, read, bodyPreview, emailToBeDisplayedId, emailToBeDisplayed, setEmailToBeDisplayed, setEmailToBeDisplayedId, emailDisplayVisible, setEmailDisplayVisible, screenWidth }) => {

    const applyStyles = () => {
        if (read == 1) {
            return "read text-bg-light"
        } else if (read == 0) {
            return "unRead text-bg-secondary "
        }
    }

    const selectedStyles = () => {
        if (emailToBeDisplayed && emailToBeDisplayed.id == id ) {
            return " text-white bg-primary"
        } 
    }

    const handleClick = (e) => {
        e.stopPropagation()
        setEmailToBeDisplayedId (e.currentTarget.dataset.id)
        screenWidth < 576 ? setEmailDisplayVisible(!emailDisplayVisible) : setEmailDisplayVisible(emailDisplayVisible)
    }

    return (
        <div onClick={handleClick} data-id={id} className={"border p-3 " + applyStyles() + selectedStyles()}>
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