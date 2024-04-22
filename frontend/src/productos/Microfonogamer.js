


function Microfonogamer(){

    return (
    <>
    <main id = "mainP">

<h1 id = "h1P">MICROFONO GAMER</h1><br/><br/>

<div class="container">
    <h2 id = "h2P">Catálogo de Productos</h2>
    <hr/>

    <div class="producto" data-product-id="">
        <img alt =""class ="imagenProducto" src = "../imagenes/productos/microfonoGamer1.jpg"/>
        <p class = "nombre">MICROFONO GAMER 1</p>
        <p class="precio">$999</p>
        <button class="botonProducto"onclick="agregarCarrito('MICROFONO GAMER 1', 999, '')">Agregar a Carrito</button>
    </div>
    <hr/>

    <div class="producto" data-product-id="">
        <img alt =""class ="imagenProducto" src = "../imagenes/productos/microfonoGamer2.jpg"/>
        <p class = "nombre">MICROFONO GAMER 2</p>
        <p class="precio">$1099</p>
        <button class="botonProducto"onclick="agregarCarrito('MICROFONO GAMER 2', 1099, '')">Agregar a Carrito</button>
    </div>
    <hr/>

    <div class="producto" data-product-id="">
        <img alt =""class ="imagenProducto" src = "../imagenes/productos/microfonoGamer3.jpg"/>
        <p class = "nombre">MICROFONO GAMER 3</p>
        <p class="precio">1199</p>
        <button class="botonProducto"onclick="agregarCarrito('MICROFONO GAMER 3', 1199, '')">Agregar a Carrito</button>
    </div>
    <hr/>

    <div class="producto" data-product-id="">
        <img alt =""class ="imagenProducto" src = "../imagenes/productos/microfonoGamer4.jpg"/>
        <p class = "nombre">MICROFONO GAMER 4</p>
        <p class="precio">$1299</p>
        <button class="botonProducto"onclick="agregarCarrito('MICROFONO GAMER 4', 1299, '')">Agregar a Carrito</button>
    </div>
    <hr/>

    <div class="producto" data-product-id="">
        <img alt =""class ="imagenProducto" src = "../imagenes/productos/microfonoGamer5.jpg"/>
        <p class = "nombre">MICROFONO GAMER 5</p>
        <p class="precio">$1399</p>
        <button class="botonProducto"onclick="agregarCarrito('MICROFONO GAMER 5', 1399, '')">Agregar a Carrito</button>
    </div>
    

    
</div><br/><br/>
<hr/>

</main>
    </>);
}


export default Microfonogamer