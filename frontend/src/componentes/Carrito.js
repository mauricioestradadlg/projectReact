import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('STRIPE_SECRET_KEY');

const Carrito = ({ productosEnCarrito, setProductosEnCarrito }) => {
    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        localStorage.removeItem('productosEnCarrito');
    };

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await axios.post('http://localhost:3000/checkout-session', {
            productos: productosEnCarrito,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
        });

        if (result.error) {
            console.error('Error al iniciar el checkout:', result.error);
            alert('Error al iniciar el checkout');
        }
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

                <button onClick={handleCheckout}>Comprar Carrito</button>
        </>
    );
};

export default Carrito;
