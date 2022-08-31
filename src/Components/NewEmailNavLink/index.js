import { useEffect, useState } from "react"

const NewEmailNavLink = ({newEmailVisible, setNewEmailVisible}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setNewEmailVisible(true)
        setIsActive(true);
    }

    return (
        <>
        <div className="row py-3 ps-2" 
        style={{
          backgroundColor: isActive ? '#007bfe' : '',
        }}>
            <a onClick={handleClick} className="fw-bold text-decoration-none">New Email</a>
        </div>
        </>
    )
}
export default NewEmailNavLink