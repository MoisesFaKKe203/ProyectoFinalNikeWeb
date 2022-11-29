import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js";
import {loginCheck} from './loginCheck.js';

onAuthStateChanged(auth, async (user) => {
    loginCheck(user);

    // if(user){
    //     loginCheck(user);
    // }else{
    //     loginCheck(user);
    // }

});

const logout = document.querySelector('#logout');
const logoutMobil =document.querySelector('#logout2')

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out');
    window.location.href='index.html';
});

logoutMobil.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out');
});
