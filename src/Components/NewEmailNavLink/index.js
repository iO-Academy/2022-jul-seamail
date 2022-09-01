import { useState } from "react"
import './style.scss'

const NewEmailNavLink = ({ setNewEmailVisible, setNewEmailColorActive, newEmailColorActive }) => {

    const handleClick = () => {
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