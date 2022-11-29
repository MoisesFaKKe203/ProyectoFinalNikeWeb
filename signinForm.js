import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth } from './firebase.js';
import { showMessage } from "./showMessages.js";


const signInForm = document.querySelector('#loginForm');

signInForm.addEventListener('submit', async e => {
    e.preventDefault();

    const correo = signInForm['emailLog'].value;
    const contraseña = signInForm['contraseñaLog'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, correo, contraseña)
        console.log(credentials);
        showMessage("Welcome " + correo, "success");
        window.location.href='index.html';
    }catch(error){
        if(error.code === "auth/wrong-password"){
            showMessage('Contraseña errónea', 'error');
        }else if(error.code === "auth/user-not-found"){
            showMessage('Usuario no encontrado', 'error');
        }
    }
});


