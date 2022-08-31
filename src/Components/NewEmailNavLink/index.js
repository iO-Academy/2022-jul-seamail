import { useEffect, useState } from "react"

const NewEmailNavLink = ({newEmailVisible, setNewEmailVisible}) => {

    const handleClick = () => {
        setNewEmailVisible(true)
        console.log(newEmailVisible)
    }

    return (
        <>
        <div className="row py-3 ps-2">
            <a onClick={handleClick} className="fw-bold text-decoration-none">New Email</a>
        </div>
        </>
    )
}
export default NewEmailNavLink