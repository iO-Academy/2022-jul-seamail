import { useState } from "react"
import './style.scss'
import { useWindowWidth } from "@react-hook/window-size";

const NewEmailNavLink = ({ setNewEmailVisible, sideNavVisible, setSideNavVisible, screenWidth}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if(screenWidth < 992) {
            setSideNavVisible(!sideNavVisible)
            setIsActive(true);
        }
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