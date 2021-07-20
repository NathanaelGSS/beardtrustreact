// import axios from "axios";

// const TARGET_URL = "http://localhost:8080/api/beardtrust/users/read";

// class UserService{
//     getUsers(){
//         return axios.get(TARGET_URL)
//     }
// }

// export default new UserService();
import User from "../Components/User"

const UserService = ({ users }) => {

    return (
        <>
            {users.map((user, index) => (
            <User
            key={index} 
            user={user}
            />
            ))}
        </>
    )
}
export default UserService