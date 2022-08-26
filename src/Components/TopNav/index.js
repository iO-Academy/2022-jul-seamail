import MobileMenuButton from "../MobileMenuButton"
import UserProfile from "../UserProfile"

const TopNav = () => {
    return (
        <div className="container">
            <nav className="row navbar navbar-expand-lg bg-secondary">
                <div className="col-12 col-lg-6">
                    <MobileMenuButton />
                </div>
                <div className="col-12 col-lg-6">
                    <h1>SeaMail</h1>
                </div>
                <div className="col-12 col-lg-6">
                    <UserProfile />
                </div>
            </nav>
        </div>
    )
}

export default TopNav