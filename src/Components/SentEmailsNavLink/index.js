import { useState } from "react"

const SentEmailsNavLink = ({ setSentNavActive }) => {

    // const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setSentNavActive(true)
    }
    
    return (
        <>
        <div className="row ps-2">
            <a onClick={handleClick} className="fw-bold text-decoration-none">Sent</a>
        </div>
        </>
    )
}
export default SentEmailsNavLink
