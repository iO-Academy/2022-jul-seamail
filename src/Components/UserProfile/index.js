import User from './person-circle.svg'

const UserProfile = ({ userName }) => {
    return (
        <>
            <img alt="profile" src={User} width="60"/>
            <h5 className="align-self-center mb-0 px-3">{userName}</h5>
        </>
    )
}

export default UserProfile