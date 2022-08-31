import MobileMenuButton from "../MobileMenuButton"
import UserProfile from "../UserProfile"
import './style.scss';

const TopNav = ({setSideNavVisible, sideNavVisible}) => {
    return (
        <div className="container-fluid">
            <nav className="navbarContainer row navbar bg-secondary text-white">
                <div className="col-3 col-lg-6 d-flex justify-content-start align-self-center d-lg-none">
                    <MobileMenuButton 
                        setSideNavVisible={setSideNavVisible}
                        sideNavVisible={sideNavVisible} />
                </div>
                <div className="col-5 col-lg-6 d-flex justify-content-start align-self-center">
                    <h1 className="topNavTitle mb-0">SeaMail</h1>
                </div>
                <div className="col-4 col-lg-6 d-flex justify-content-end">
                    <UserProfile />
                </div>
            </nav>
        </div>
    )
}

export default TopNav