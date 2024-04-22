



function Monitorgamer(){

    return (
    <>
    <main id = "mainP">

        <h1 id = "h1P">MONITOR GAMER</h1><br/><br/>

        <div class="container">
            <h2 id = "h2P">Catálogo de Productos</h2>
            <hr/>

            <div class="producto" data-product-id="prod_PuDtsyvnUyFDYz">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/monitorGamer1.jpg"/>
                <p class = "nombre">MONITOR GAMER 1</p>
                <p class="precio">$2999</p>
                <button class="botonProducto"onclick="agregarCarrito('MONITOR GAMER 1', 2999, 'prod_PuDtsyvnUyFDYz')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDuXULggLmRea">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/monitorGamer2.jpg"/>
                <p class = "nombre">MONITOR GAMER 2</p>
                <p class="precio">$3499</p>
                <button class="botonProducto"onclick="agregarCarrito('MONITOR GAMER 2', 3499, 'prod_PuDuXULggLmRea')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDwkJZ7aOVPok">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/monitorGamer3.jpg"/>
                <p class = "nombre">MONITOR GAMER 3</p>
                <p class="precio">$3999</p>
                <button class="botonProducto"onclick="agregarCarrito('MONITOR GAMER 3', 3999, 'prod_PuDwkJZ7aOVPok')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDymHjkqFQ8kc">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/monitorGamer4.jpg"/>
                <p class = "nombre">MONITOR GAMER 4</p>
                <p class="precio">$4599</p>
                <button class="botonProducto"onclick="agregarCarrito('MONITOR GAMER 4', 4599, 'prod_PuDymHjkqFQ8kc')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PuDyIeiZ6hojYi">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/monitorGamer5.jpg"/>
                <p class = "nombre">MONITOR GAMER 5</p>
                <p class="precio">$4999</p>
                <button class="botonProducto"onclick="agregarCarrito('MONITOR GAMER 5', 4999, 'prod_PuDyIeiZ6hojYi')">Agregar a Carrito</button>
            </div>
            

            
        </div><br/><br/>
        <hr/>

        </main>
    </>);
}


export default Monitorgamer