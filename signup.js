import { saveUsers } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth } from './firebase.js';
import { showMessage } from './showMessages.js';


//--inicio REGISTRO USUARIO--//

const registerForm = document.getElementById('registroForm');

registerForm.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const name = registerForm['nombre'].value;
    const lastName = registerForm['apellidos'].value;
    const mail = registerForm['email'].value;
    const password = registerForm['contraseña'].value;
    saveUsers(name, lastName, mail, password);
    
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, mail, password);
        console.log(userCredentials);
        

        showMessage("Welcome " + mail, "success");

        window.location.href='index.html';
        localStorage.usuario = mail;
    }catch(error){
        console.log(error.message);
        console.log(error.code);

        if(error.code === 'auth/invalid-email'){
            showMessage("Correo invalido","error");
        }else if(error.code === 'auth/weak-password'){
            showMessage("Contraseña débil","error");
        }else if(error.code === 'auth/email-already-in-use'){
            showMessage("Este correo ya esta registrado","error");
        }else if(error.code) {
            showMessage("Error desconocido","error");
        }
    }
});
//--fin REGISTRO USUARIO--//


