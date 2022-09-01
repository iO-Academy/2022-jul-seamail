import { useState } from "react"

const SentEmailsNavLink = ({
    setSentNavActive,
    sentNavActive,
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
