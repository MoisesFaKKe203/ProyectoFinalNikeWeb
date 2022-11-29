const agregarAListaDeseos = document.querySelectorAll('.agregarLista');
agregarAListaDeseos.forEach(iconoCorazon => {
    iconoCorazon.addEventListener('click', agregarAlHacerClick);
    
});

const contenedorConProductosSeleccionados= document.querySelector('.shoppingCartItemsContainer');




function agregarAlHacerClick(event){
    const corazon = event.target;
    const card = corazon.closest('.card');
    
    const nombre = card.querySelector('.nombre').textContent;
    const descripcion = card.querySelector('.descripcion').textContent;
    const imagen = card.querySelector('.imagen').src;
    

    agregarProductoALaLista(nombre,descripcion,imagen);
}

function agregarProductoALaLista(nombre, descripcion, imagen){

    const productosPorNombre = contenedorConProductosSeleccionados.getElementsByClassName('shoppingCartItemTitle');

    for(let i = 0; i < productosPorNombre.length; i++){
        if(productosPorNombre[i].innerText === nombre){
            const cantidadDeProductos = productosPorNombre[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            cantidadDeProductos.value++;
            return;
        }
    }

    const filaListaDeseos = document.createElement('div');
    const contenidoSeleccionado = `
<div class="contenedorLista">
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${imagen} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${nombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${descripcion}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    </div>`;

    filaListaDeseos.innerHTML = contenidoSeleccionado;
    contenedorConProductosSeleccionados.append(filaListaDeseos);

    

    filaListaDeseos.querySelector('.buttonDelete').addEventListener('click', borrarProductoDeLaLista);

    

}

function borrarProductoDeLaLista(event) {
    const hacerClickEnBorrar = event.target;
    hacerClickEnBorrar.closest('.shoppingCartItem').remove();
}



