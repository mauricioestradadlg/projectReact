import React from 'react';


function PCgamer(){

    return (
    <>
    <main id = "mainP">

        <h1 id = "h1P">PC GAMER</h1><br/><br/>

        <div class="container">
            <h2 id = "h2P">Catálogo de Productos</h2>
            <hr/>

            <div class="producto" data-product-id="prod_PrN82LhKIlUIuA">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/pcgamerOne.jpg"/>
                <p class = "nombre">PC GAMER 1</p>
                <p class="precio">$10500</p>
                <button class="botonProducto" onclick="agregarCarrito('PC GAMER 1', 10500, 'prod_PrN82LhKIlUIuA')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_Pts0KyeqWszgad">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/pcgamer2.jpg"/>
                <p class = "nombre">PC GAMER 2</p>
                <p class="precio">$15999</p>
                <button class="botonProducto"onclick="agregarCarrito('PC GAMER 2', 15999, 'prod_Pts0KyeqWszgad')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_Pts1cK3GXhUtRl">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/pcgamer3.jpg"/>
                <p class = "nombre">PC GAMER 3</p>
                <p class="precio">$19899</p>
                <button class="botonProducto"onclick="agregarCarrito('PC GAMER 3', 19899, 'prod_Pts1cK3GXhUtRl')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsARQyDbY0sey">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/pcgamer4.jpg"/>
                <p class = "nombre">PC GAMER 4</p>
                <p class="precio">$13499</p>
                <button class="botonProducto"onclick="agregarCarrito('PC GAMER 4', 13499, 'prod_PtsARQyDbY0sey')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsBFgIViE15tH">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/pcgamer5.jpg"/>
                <p class = "nombre">PC GAMER 5</p>
                <p class="precio">$5999</p>
                <button class="botonProducto"onclick="agregarCarrito('PC GAMER 5', 5999, 'prod_PtsBFgIViE15tH')">Agregar a Carrito</button>
            </div>
            <hr/>

      

        </div><br/><br/>
        <hr/>
    </main>
    </>);
}


export default PCgamer
