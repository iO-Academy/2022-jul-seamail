import { useState } from "react"
import './style.scss'
import { useWindowWidth } from "@react-hook/window-size";

const NewEmailNavLink = ({ setNewEmailVisible, sideNavVisible, setSideNavVisible, screenWidth, setNewEmailColorActive, newEmailColorActive }) => {

    const handleClick = () => {
        if(screenWidth < 992) {
            setSideNavVisible(!sideNavVisible)
            setNewEmailColorActive(true);
        }
        setNewEmailVisible(true)
        setNewEmailColorActive(true);
    }

    let baseStyles = 'row py-3 ps-2'

    return (
        <>
            <div className={newEmailColorActive ? (baseStyles + ' link-active ') : baseStyles}>
                <a onClick={handleClick} className="fw-bold text-decoration-none">New Email</a>
            </div>
        </>
    )
}
export default NewEmailNavLink