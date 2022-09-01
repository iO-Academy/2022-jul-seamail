import { useWindowWidth } from "@react-hook/window-size";

const CloseButton = ({ setEmailDisplayVisible, setEmailToBeDisplayedId}) => {
    const screenWidth = useWindowWidth()

    const handleClick = () => {
        setEmailToBeDisplayedId(null)
        if(screenWidth < 576) {
            setEmailDisplayVisible(false)
        }
    } 
    
    return <button onClick={handleClick} type="button" className="btn-close pt-5 pb-0" aria-label="Close"></button>
}

export default CloseButton
