import './style.scss';


const MobileMenuButton = ({setSideNavVisible, sideNavVisible}) => {

    const handleClick = () => {
        setSideNavVisible(!sideNavVisible)
    }
    return <button onClick={handleClick} className="menuButton btn btn-secondary border-white fs-4">MENU</button>
}

export default MobileMenuButton