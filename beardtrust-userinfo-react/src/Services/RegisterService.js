import axios from "axios";

const RegisterService = () => {
const url = 'http://localhost:7777/users'
const regInfo = JSON.parse('{"username":"JoeChevy","password":"Cars567","email":"Joe@Chevy.com","phone":"3306158297","firstName":"Joe","lastName":"Howland","dateOfBirth":"1963-05-17"}');
const xhr = new XMLHttpRequest();
// export function RegisterService() {
//     let loginreq = new Request(url, {
//         method: 'POST',//for registering in
//         body: regInfo.json,
//         headers: {'Content-Type': 'application/json; charset=utf-8'},
//         mode: 'cors'
//     });
xhr.open('POST', url);
// xhr.onreadystatechange = handler;
// xhr.send(); What are we sending?
    axios({
        method: 'POST',
        url,
        data: JSON.stringify(regInfo),
        headers: {
            " Access-Control-Allow-Headers": "*", //?Not valid?
            " Access-Control-Allow-Method": "*",
            //" Access-Control-Allow-Origin": "*", //Also not valid? What are setRequestHeader and XMLHttpRequest?
            " Content-Type": "application/json"
        },
        mode: 'cors'
    })
        .then((res) => {
            if (res.ok) {
                console.log('register response ok');
                return res.json();
            } else {
                throw new Error('register response was not OK');
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
        })
        .catch((e) => {
            console.log('REGISTER FAILED: ', e.message);
        });;
    }
    export default RegisterService