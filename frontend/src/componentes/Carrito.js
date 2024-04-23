import React from 'react';

function Carrito({ productosEnCarrito, setProductosEnCarrito }) {
    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        localStorage.removeItem('productosEnCarrito');
    };

    return (
        <>
            <h1 id="h1Inicio">CARRITO DE COMPRAS: </h1><br /><br />
            <ul id="carrito">
                {productosEnCarrito.map((producto, index) => (
                    <li key={index}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
            <p id="total">Total a pagar: ${productosEnCarrito.reduce((total, producto) => total + producto.precio, 0)}</p>
            <button id="vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button id="comprarCarrito">Comprar Carrito</button>
        </>
    );
}

export default Carrito;


