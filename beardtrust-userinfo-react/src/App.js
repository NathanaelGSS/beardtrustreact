
import  RegisterService  from './Services/RegisterService';
import  LoginService  from './Services/LoginService'
import UserService from './Services/UserService'
import Button from './Components/Button'
//import UserComponent from './Components/UserComponent';
import { useState, useEffect } from 'react'


function App() {

  const [users, setUsers] = useState([]);
  var userID = RegisterService();
  const token = new LoginService();//want the token frpm the header
  const url = 'http://localhost:9001/users;' //current get all url, will need admin's token
  
let request = new Request(url, {
    method: 'GET',//for get all
    headers: token,
    mode: 'cors'
});

fetch(request)
.then( (response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error('Response was not OK');
    }
})
.then( (jsonData) => {
    console.log(jsonData)
})
.catch( (e) => {
    console.log('VIEW USER FAILED: ', e.message);
});

  useEffect(() => {//show a loading icon/spinner
      fetch(url)
      .then(res => res.json()
      .then(data => setUsers(data))
      .catch(err => console.log("VIEW USER ERR 1: " + err)))//Dusplay something on screen
      .catch(er => console.log("VIEW USER ERR 2: " + er))//see above
  }, [])

  return (
    <div className="Test App">
      <h1>BeardTrust User List</h1>
      <Button color = 'blue' text='View'/>
      <ul><h3>{'Username User ID First Name Last Name Email Phone Date of Birth' }</h3>
      <UserService users={users} /></ul>
    </div>
  );
}

export default App;
