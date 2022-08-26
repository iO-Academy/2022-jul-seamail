import User from './person-circle.svg'

const UserProfile = () => {
    return (
        <>
            <img src={User} width="60px"/>
            <h5 class="align-self-center mb-0 px-3">User Name</h5>
        </>
    )
}

export default UserProfile