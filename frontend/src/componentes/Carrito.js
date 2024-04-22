import React from 'react';

function Carrito() {
    return (
        <>
            <h1 id="h1Inicio">CARRITO DE COMPRAS: </h1><br/><br/>

            <ul id="carrito">
                {/* Mostrar productos en el carrito */}
            </ul>
            
            <p id="total">Total a pagar: $<span id="totalAmount">0</span></p>
            <button id="vaciarCarrito">Vaciar Carrito</button>
            <button id="comprarCarrito">Comprar Carrito</button>
        </>
    );
}

export default Carrito;
