import { saveProducts, getProducts, onGetProducts, deleteProducts, getProduct, updateProduct } from './firebase.js';

const productoForm = document.getElementById('products-form');
const productContainer = document.getElementById('products-container');

let editStatus = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () =>{

    onGetProducts((querySnapshot) => {
            //escribe html y carga lo que hay en la base de datos
            let html = '';

            querySnapshot.forEach(doc => {
                const product = doc.data();
                html += `
                <table class="table" style="background-color: white;">
                <thead>
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                        <tr>
                            <th scope="row" width="20%"><img src="${product.imagen}" alt=""></th>
                            <td>${product.nombre}</td>
                            <td>${product.descripcion}</td>
                            <td><button class='btn btn-warning btn-edit' data-id="${doc.id}">
                                <i class="bi bi-pencil-fill"></i>
                            </button>
                            <button class='btn btn-danger btn-delete' data-id="${doc.id}">
                                <i class="bi bi-trash3-fill"></i>
                            </button></td>
                        </tr>
                        </tbody>
                        </table> 
                    
                `
            });

            productContainer.innerHTML = html;


            const btnsDelete = productContainer.querySelectorAll('.btn-delete');
            
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', ({target: {dataset}})=>{
                    deleteProducts(dataset.id);
                });
            });

            const btnsEdit = productContainer.querySelectorAll('.btn-edit');
            btnsEdit.forEach(btn => {
                btn.addEventListener('click', async ({target: {dataset}}) =>{
                    const doc = await getProduct (dataset.id);
                    const product = doc.data();

                    productoForm['imagenProducto'].value = product.imagen;
                    productoForm['nombreProducto'].value = product.nombre;
                    productoForm['descripcionProducto'].value = product.descripcion;
                    editStatus = true;
                    id = doc.id;

                    productoForm['btn-product-save'].innerText = 'Update';
                });
            });
        });
    });

    





productoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const imagen = productoForm['imagenProducto'].value;
    const nombre = productoForm['nombreProducto'].value;
    const descripcion = productoForm['descripcionProducto'].value;

    if(!editStatus){
        saveProducts(imagen,nombre,descripcion);
    }else{
        updateProduct(id, {
            imagen,nombre,descripcion});

        editStatus = false;
    }
    

    //limpiar campo una vez que guarde una tarea
    productoForm.reset()
    
});

// productoForm.addEventListener('submit', async (e) =>{
//     e.preventDefault();

//     const imagen = productoForm['imagenProducto'].value;
//     const nombre = productoForm['nombreProducto'].value;
//     const descripcion = productoForm['descripcionProducto'].value;
//     saveProducts(imagen,nombre,descripcion);
    
    
// });