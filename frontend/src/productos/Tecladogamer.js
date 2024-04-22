


function Tecladogamer(){

    return (
    <>
        <main id = "mainP">

        <h1 id = "h1P">TECLADO GAMER</h1><br/><br/>

        <div class="container">
            <h2 id = "h2P">Catálogo de Productos</h2>
            <hr/>

            <div class="producto" data-product-id="prod_PuDQYe0hcx48z2">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/tecladoGamer1.jpg"/>
                <p class = "nombre">TECLADO GAMER 1</p>
                <p class="precio">$999</p>
                <button class="botonProducto"onclick="agregarCarrito('TECLADO GAMER 1', 999, 'prod_PuDQYe0hcx48z2')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDRUuoyTkTJdo">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/tecladoGamer2.jpg"/>
                <p class = "nombre">TECLADO GAMER 2</p>
                <p class="precio">$1099</p>
                <button class="botonProducto"onclick="agregarCarrito('TECLADO GAMER 2', 1099, 'prod_PuDRUuoyTkTJdo')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDTQqknceSYgD">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/tecladoGamer3.jpg"/>
                <p class = "nombre">TECLADO GAMER 3</p>
                <p class="precio">$1199</p>
                <button class="botonProducto"onclick="agregarCarrito('TECLADO GAMER 3', 1199, 'prod_PuDTQqknceSYgD')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDV1h90zWq4bK">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/tecladoGamer4.jpg"/>
                <p class = "nombre">TECLADO GAMER 4</p>
                <p class="precio">$1299</p>
                <button class="botonProducto"onclick="agregarCarrito('TECLADO GAMER 4', 1299, 'prod_PuDV1h90zWq4bK')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDWxMBNNZ1vvZ">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/tecladoGamer5.jpg"/>
                <p class = "nombre">TECLADO GAMER 5</p>
                <p class="precio">$1399</p>
                <button class="botonProducto"onclick="agregarCarrito('TECLADO GAMER 5', 1399, 'prod_PuDWxMBNNZ1vvZ')">Agregar a Carrito</button>
            </div>
            

            
        </div><br/><br/>
        <hr/>

        </main>
    </>);
}


export default Tecladogamer