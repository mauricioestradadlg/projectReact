



function Carrito(){

    return(<>

        <h1 id = "h1Inicio">CARRITO DE COMPRAS: </h1><br/><br/>

        <ul id="carrito"></ul>
        <script>
            
        </script>
        <p id="total">Total a pagar: $<span id="totalAmount">0</span></p>
        <button id="vaciarCarrito">Vaciar Carrito</button>
        <button id="comprarCarrito" onclick ="comprarCarrito()">Comprar Carrito</button>

    </>);

}

export default Carrito