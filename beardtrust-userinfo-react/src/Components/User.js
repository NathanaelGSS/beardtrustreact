
const User = ({ user }) => {

    return (
        <div >
            <p>
                {user.username + ' '}
                {user.userId + ' '}
                {user.firstName + ' '}
                {user.lastName + ' '}
                {user.email + ' '}
                {user.phone + ' '}
                {user.dateOfBirth + ' '}

            </p>
        </div >
    )
}
export default User
