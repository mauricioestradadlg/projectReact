

function Mousegamer(){

    return (
    <>
            <main id = "mainP">

        <h1 id = "h1P">MOUSE GAMER</h1><br/><br/>

        <div class="container">
            <h2 id = "h2P">Catálogo de Productos</h2>
            <hr/>

            <div class="producto" data-product-id="prod_PtsQvxTyqAq0f5">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/mouseGamer1.jpg"/>
                <p class = "nombre">MOUSE GAMER 1</p>
                <p class="precio">$599</p>
                <button class="botonProducto"onclick="agregarCarrito('MOUSE GAMER 1', 599, 'prod_PtsQvxTyqAq0f5')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsSkiDcizj0nl">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/mouseGamer2.jpg"/>
                <p class = "nombre">MOUSE GAMER 2</p>
                <p class="precio">$699</p>
                <button class="botonProducto"onclick="agregarCarrito('MOUSE GAMER 2', 699, 'prod_PtsSkiDcizj0nl')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsU3D3YzP4q3z">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/mouseGamer3.jpg"/>
                <p class = "nombre">MOUSE GAMER 3</p>
                <p class="precio">$799</p>
                <button class="botonProducto"onclick="agregarCarrito('MOUSE GAMER 3', 799, 'prod_PtsU3D3YzP4q3z')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsW8O6NcexAlU">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/mouseGamer4.jpg"/>
                <p class = "nombre">MOUSE GAMER 4</p>
                <p class="precio">$899</p>
                <button class="botonProducto"onclick="agregarCarrito('MOUSE GAMER 4', 899, 'prod_PtsW8O6NcexAlU')">Agregar a Carrito</button>
            </div>
            <hr/>

            <div class="producto" data-product-id="prod_PtsZQukZybkPDy">
                <img alt =""class ="imagenProducto" src = "../imagenes/productos/mouseGamer5.jpeg"/>
                <p class = "nombre">MOUSE GAMER 5</p>
                <p class="precio">$999</p>
                <button class="botonProducto"onclick="agregarCarrito('MOUSE GAMER 1', 999, 'prod_PtsZQukZybkPDy')">Agregar a Carrito</button>
            </div>
            

            
        </div><br/><br/>
        <hr/>

        </main>
    </>);
}


export default Mousegamer