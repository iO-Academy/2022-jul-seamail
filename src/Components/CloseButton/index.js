
const CloseButton = ({emailDisplayVisible, setEmailDisplayVisible}) => {

    const handleClick = () => {

        setEmailDisplayVisible(!emailDisplayVisible)
    } 

    return <button onClick={handleClick} type="button" className="btn-close" aria-label="Close"></button>

}

export default CloseButton
