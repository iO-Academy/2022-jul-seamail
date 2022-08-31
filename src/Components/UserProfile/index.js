import User from './person-circle.svg'

const UserProfile = () => {
    return (
        <>
            <img src={User} width="60"/>
            <h5 className="align-self-center mb-0 px-3">Charlie Cogglefish</h5>
        </>
    )
}

export default UserProfile