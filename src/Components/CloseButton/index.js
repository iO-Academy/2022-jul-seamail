
const CloseButton = ({emailDisplayVisible, setEmailDisplayVisible}) => {

    const handleClick = () => {
        setEmailDisplayVisible(false)
    } 
    
    return <button onClick={handleClick} type="button" className="btn-close pt-5 pb-0" aria-label="Close"></button>
}

export default CloseButton
