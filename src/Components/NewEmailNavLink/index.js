import { useState } from "react"
import './style.scss'

const NewEmailNavLink = ({ setNewEmailVisible}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setNewEmailVisible(true)
        setIsActive(true);
    }

    let baseStyles = 'row py-3 ps-2'

    return (
        <>
            <div className={isActive ? (baseStyles + ' link-active ') : baseStyles}>
                <a onClick={handleClick} className="fw-bold text-decoration-none">New Email</a>
            </div>
        </>
    )
}
export default NewEmailNavLink