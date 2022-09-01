const SentEmailsNavLink = ({
    setSentNavActive,
    sentNavActive,
    setInboxColorActive,
    setNewEmailColorActive,
    setNewEmailVisible,
    screenWidth,
    sideNavVisible, 
    setSideNavVisible
}) => {

    const handleClick = () => {
        if(screenWidth < 992) {
            setSideNavVisible(!sideNavVisible)
            setSentNavActive(true)
        }
        setSentNavActive(true)
        setInboxColorActive(false)
        setNewEmailColorActive(false)
        setNewEmailVisible(false)
    }

    let baseStyles = "row py-3 ps-2 side-nav-links"
    
    return (
        <>
        <div className={sentNavActive ? (baseStyles + ' link-active') : baseStyles}>
            <p onClick={handleClick} className="fw-bold ps-3 nav-link text-decoration-none">Sent</p>
        </div>
        </>
    )
}
export default SentEmailsNavLink
