let carritoDeCompras = [];

// Llamadas al HTML:
let contenedor = document.getElementById("main_container");
let alCarrito = document.getElementById("carrito");

// Creo elementos desde JS a DOM-HTML.
// llamo al array stockProductos desde stock.js.
//Iterar

stockProductos.forEach(item =>{

// creo un div con cada uno de los objetos del array
let div = document.createElement('div')
div.className = 'div_container'

// Creo código de JS dentro del div
div.innerHTML = `<card class="card_container">
<picture class="card__picture">
    <img class="img" src="${item.img}" alt="">
</picture>
<div class="info_card">
    <h2 class="title__card">${item.nombre}</h2>
    <p class="parraph__card">${item.descripcion}</p>
    <p class="parraph__card">$${item.precio}</p>
    <div class="input">
        <input type="number" id="cantidad" placeholder="Cantidad">
    </div>
    <button id="btnAñadir${item.id}" class="button_card" type="button">Agregar al carrito</botton>
</div>
</card>`

//Se añade el código al contenedor 
contenedor.appendChild(div);

//Se crea evento Click para botón de producto
let btnAñadir = document.getElementById(`btnAñadir${item.id}`);
btnAñadir.addEventListener('click', ()=> {

//Se llama a la función agregarCarrito
agregarAlCarrito(item.id);
})
});

//Se crea la función para añadir el producto filtrado al array carritoDeCompras
function agregarAlCarrito (id) {

//Se ingresa a la función y se busca coincidencia con id
let productoAñadido = stockProductos.find(item=> item.id == id);


//Se realiza Push del producto encontrado en array de objetos y lo pusheo al carritDeCompras
carritoDeCompras.push(productoAñadido);

//Se llama a la función mostrarCarrito
    mostrarCarrito(productoAñadido)
}

//Funcion mostrarCarrito
function mostrarCarrito (productoAñadido) {

//Se crea un div por cada producto seleccionado en JS
let div = document.createElement('div');
div.className = 'carrito';
div.innerHTML = `<h3 id="text__carrito">${productoAñadido.nombre}</h3>
                <b id="total">Precio por unidad: $${productoAñadido.precio}</b>
                <button class="btn_eliminar">Eliminar</button>`

//Se envía el div al HTML
    alCarrito.appendChild(div)
}