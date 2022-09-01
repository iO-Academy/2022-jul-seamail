import { useState } from "react"

const SentEmailsNavLink = ({
    setSentNavActive,
    sentNavActive
}) => {

    const handleClick = () => {
        setSentNavActive(true)
    }

    let baseStyles = "row ps-2"
    
    return (
        <>
        <div className={sentNavActive ? (baseStyles + ' link-active ') : baseStyles}>
            <a onClick={handleClick} className="fw-bold text-decoration-none">Sent</a>
        </div>
        </>
    )
}
export default SentEmailsNavLink
