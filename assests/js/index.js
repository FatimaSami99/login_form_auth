import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const auth = getAuth()
function register(){

    console.log(auth);
    let username = document.querySelector("#username")
    let password = document.querySelector("#password")
    let email = document.querySelector("#email")
    
    console.log(username.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
            alert("new user is registered!")
        })
        .catch((err) => {
            alert("error")
            console.log("error is there =", err);
        })

}
document.getElementById("register").addEventListener("click", register)

function login() {
    let password = document.querySelector("#passwordForLogin")
    let email = document.querySelector("#emailForLogin")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            alert("successfully login!")
        })
        .catch((err) => {
            alert("error")
            console.log("error is there =", err);
        })

}
document.getElementById("register").addEventListener("click" , register)
// npm install -g firebase
// npm install -g serve
