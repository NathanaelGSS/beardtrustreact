
const url2 = 'http://localhost:9001/users/login'
var loginInfo = '{"password":"Cars567","email":"Joe@Chevy.com"}'
export function LoginService() {
    let loginreq = new Request(url2, {
        method: 'POST',//for logging in
        body: loginInfo,
        mode: 'cors'
    });
    fetch(loginreq)
        .then((res) => {
            if (res.ok) {
                console.log('login response ok');
                return res.json();
            } else {
                throw new Error('login response was not OK');
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
        })
        .catch((e) => {
            console.log('LOGIN FAILED: ', e.message);
        });;
}

export default LoginService