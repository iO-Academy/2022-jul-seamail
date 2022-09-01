import { useState } from "react"

const SentEmailsNavLink = ({
    setSentNavActive,
    sentNavActive,
    setInboxColorActive,
    setNewEmailColorActive,
    setNewEmailVisible
}) => {

    const handleClick = () => {
        setSentNavActive(true)
        setInboxColorActive(false)
        setNewEmailColorActive(false)
        setNewEmailVisible(false)
    }

    let baseStyles = "row py-3 ps-2 side-nav-links"
    
    return (
        <>
        <div className={sentNavActive ? (baseStyles + ' link-active') : baseStyles}>
            <a onClick={handleClick} className="fw-bold text-decoration-none">Sent</a>
        </div>
        </>
    )
}
export default SentEmailsNavLink
