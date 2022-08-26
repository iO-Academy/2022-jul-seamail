import MobileMenuButton from "../MobileMenuButton"
import UserProfile from "../UserProfile"

const TopNav = () => {
    return (
        <div className="container">
            <nav className="row navbar bg-secondary">
                <div className="col-2 col-lg-6 d-flex justify-content-start align-self-center d-lg-none">
                    <MobileMenuButton />
                </div>
                <div className="col-6 col-lg-6 d-flex justify-content-start align-self-center">
                    <h1 className="mb-0">SeaMail</h1>
                </div>
                <div className="col-4 col-lg-6 d-flex justify-content-end">
                    <UserProfile />
                </div>
            </nav>
        </div>
    )
}

export default TopNav