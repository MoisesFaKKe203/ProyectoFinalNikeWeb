const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');




console.log(loggedOutLinks);
console.log(loggedInLinks);

export const loginCheck = user => {
    if ( user ) {
        loggedInLinks.forEach(div => div.style.display = 'block')
        loggedOutLinks.forEach(div => div.style.display = 'none')
        
        document.getElementById('enSesion').innerHTML= '<div class="espacio"><ul class="navbar-nav text-light"><div class="buscar margen"><input id="buscar" type="text" class= "Buscar_texto"><a onclick="busqueda()" class="button" style="float: right"><i class="bi bi-search lupa"></i></a></div></div><div class="espacio enSesion" id="enSesionUser"><a class="nav-link enSesion" href="usuario.html"><i class="iconosNav bi-person-fill enSesion" id="enSesion"></i></a></div><div class="espacio enSesion" id="enSesionCora"><div class="nav-item col-12 col-md-auto"> <a class="nav-link enSesion" href="http://127.0.0.1:5501/index-Catalogo-AHombres.html#listaDeseos"><i class="iconosNav bi-heart-fill enSesion" id="enSesion"></i></a> </div></ul></div>'
        document.getElementById('crud').innerHTML=`<a href="crud.html" class="btn-inventary">
        <i class="bi bi-card-checklist"></i>
    </a>`
    }else{
        loggedInLinks.forEach(div => div.style.display = 'none')
        loggedOutLinks.forEach(div => div.style.display = 'block')

        document.getElementById('enSesion').innerHTML= '<div class="espacio"><ul class="navbar-nav text-light"><div class="buscar margen"><input id="buscar" type="text" class= "Buscar_texto"><a onclick="busqueda()" class="button" style="float: right"><i class="bi bi-search lupa"></i></a></div></div>'
        document.getElementById('crud').innerHTML=''
    }
}