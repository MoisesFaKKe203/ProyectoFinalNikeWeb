import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyvKdDjAtK8dgIdZOeujkv-bbQhj9XHEo",
    authDomain: "nike-b4875.firebaseapp.com",
    databaseURL: "https://nike-b4875-default-rtdb.firebaseio.com",
    projectId: "nike-b4875",
    storageBucket: "nike-b4875.appspot.com",
    messagingSenderId: "420049281077",
    appId: "1:420049281077:web:896a8ed03922548aed117c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//conexion a la base de datos
const db = getFirestore();

//funcion que guarda los usuarios
export const saveUsers = (nombre, apellido, correo, contraseña) => {
    addDoc(collection(db,'users'),{nombre, apellido, correo, contraseña})
}

//funcion que guarda los productos
export const saveProducts = (imagen, nombre, descripcion) => {
    addDoc(collection(db,'products'),{imagen, nombre, descripcion})
}

//funcion para listar los productos
export const getProducts = () => getDocs(collection(db,'products'))

//funcion cuando los datos cambien (Productos)
export const onGetProducts = (callback) => onSnapshot(collection(db,'products'), callback)

//funcion para borrar un producto
export const deleteProducts = id => deleteDoc(doc(db,'products', id));

//funcion para obtener un dato
export const getProduct = id => getDoc(doc(db, 'products',id));

//funcion para actualizar
export const updateProduct = (id, newFields) => updateDoc(doc(db,'products',id), newFields);



