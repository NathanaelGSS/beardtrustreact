
// import React from "react";
// import UserService from "../Services/UserService";

// class User extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             users: []
//         }
//     }

//     componentDidMount() {
//         UserService.getUsers().then((res) => {
//             this.setState({ users: res });
//         });
//     }

//     render() {
//         console.log("Array found: " + this.state?.users);
//         return (
//             <div>
//                 <h1 className="text-center"> Users List</h1>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>

//                             <td> User First Name</td>
//                             <td> User Last Name</td>
//                             <td> User ID</td>
//                             <td> User Username</td>
//                             <td> User password</td>
//                             <td> User Email</td>
//                             <td> User Phone number</td>
//                             <td> User Date of birth</td>
//                             <td> User System Role</td>
//                         </tr>

//                     </thead>
//                     <tbody>
//                         {
//                             this.state.user?.map(
//                                 user =>
//                                     <tr key={user.id}>
//                                         {user.firstName + " "}
//                                         {user.lastName + " "}
//                                         {user.userId + " "}
//                                         {user.username + " "}
//                                         {user.password + " "}
//                                         {user.email + " "}
//                                         {user.phone + " "}
//                                         {user.dateOfBirth + " "}
//                                         {user.role + " "}
//                                     </tr>
//                             )
//                         }

//                     </tbody>
//                 </table>

//             </div>

//         )
//     }

// }

// export default User