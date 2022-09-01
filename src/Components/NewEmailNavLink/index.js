import { useState } from "react"
import './style.scss'

const NewEmailNavLink = ({
    setNewEmailVisible,
    setNewEmailColorActive,
    newEmailColorActive,
    setInboxColorActive,
    setSentNavActive,
    sideNavVisible, 
    setSideNavVisible, 
    screenWidth
}) => {

    const handleClick = () => {
        if(screenWidth < 992) {
            setSideNavVisible(!sideNavVisible)
            setNewEmailColorActive(true);
        }
        setNewEmailVisible(true)
        setNewEmailColorActive(true)
        setInboxColorActive(false)
        setSentNavActive(false)
    }

    let baseStyles = 'row py-3 ps-2 side-nav-links'

    return (
        <>
            <div className={newEmailColorActive ? (baseStyles + ' link-active ') : baseStyles}>
                <a onClick={handleClick} className="fw-bold text-decoration-none">New Email</a>
            </div>
        </>
    )
}
export default NewEmailNavLink