import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
const auth = getAuth()
function register(){

    console.log(auth);
    let username = document.querySelector("#username")
    let password = document.querySelector("#password")
    let email = document.querySelector("#email")
    
    console.log(username.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)

}
document.getElementById("register").addEventListener("click" , register)
// npm install -g firebase
// npm install -g serve