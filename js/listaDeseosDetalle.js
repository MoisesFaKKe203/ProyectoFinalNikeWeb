function aparecer(){
    document.getElementById('listaDeseos').innerHTML=`<div class="tituloListDeseos" id="enSesionUser">
    <h1>LISTA DE DESEOS</h1>
</div>

<!-- START SECTION SHOPPING CART -->
<section class="shopping-cart" id="listaDeseos">
<div class="container">
    
    <hr>
    <div class="row">
        <div class="col-4" >
            <div class="shopping-cart-header">
                <!-- <h6>Producto</h6> -->
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-header">
                <!-- <h6 class="">Descripción</h6> -->
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-header">
                <!-- <h6>Cantidad</h6> -->
            </div>
        </div>
    </div>
    <!-- ? START SHOPPING CART ITEMS -->
    <div class="shopping-cart-items shoppingCartItemsContainer">
        <div>
        <div class="contenedorLista">
            <div class="row shoppingCartItem">
                  <div class="col-6">
                      <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <img src="/img/CatalogoNike/Mujeres/Calzado/Nike Air Force 1 High W.jpg" class="shopping-cart-image">
                          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">Nike Air Force 1 MID</h6>
                      </div>
                  </div>
                  <div class="col-2">
                      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <p class="item-price mb-0 shoppingCartItemPrice">Costura nítida, detalles audaces</p>
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
              </div>
            </div>
    </div>
    <!-- ? END SHOPPING CART ITEMS -->






</div>

</section>`
}