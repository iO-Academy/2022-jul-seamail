import './style.scss';

let sideNavPosition = document.querySelector('.sideNavContainer')

const MobileMenuButton = ({setSideNavVisible, sideNavVisible}) => {

    const handleClick = () => {
        setSideNavVisible(!sideNavVisible)
        sideNavPosition.style.position = 'absolute'
    }
    return <button onClick={handleClick} className="menuButton btn btn-secondary border-white fs-4">MENU</button>
}

export default MobileMenuButton