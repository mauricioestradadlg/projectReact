import React from 'react';
import { useNavigate } from 'react-router-dom';


function Microfonogamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PuDacfus0p6kyp', nombre: 'MICROFONO GAMER 1', precio: 999, imagen: '../imagenes/productos/microfonoGamer1.jpg' },
        { id: 'prod_PuDbi0XFfRF2w4', nombre: 'MICROFONO GAMER 2', precio: 1099, imagen: '../imagenes/productos/microfonoGamer2.jpg' },
        { id: 'prod_PuDdHRY7sygWa9', nombre: 'MICROFONO GAMER 3', precio: 1199, imagen: '../imagenes/productos/microfonoGamer3.jpg' },
        { id: 'prod_PuDfc3y7Dd9JRi', nombre: 'MICROFONO GAMER 4', precio: 1299, imagen: '../imagenes/productos/microfonoGamer4.jpg' },
        { id: 'prod_PuDglHPEsmcQPm', nombre: 'MICROFONO GAMER 5', precio: 1399, imagen: '../imagenes/productos/microfonoGamer5.jpg' },
    ];

    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        navigate('/carrito');
    };

    return (
        <>
            <main id="mainP">
                <h1 id="h1P">HEADSET GAMER</h1><br /><br />
                <div className="container">
                    <h2 id="h2P">Catálogo de Productos</h2>
                    <hr />
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto" data-product-id={producto.id}>
                            <img alt="" className="imagenProducto" src={producto.imagen} />
                            <p className="nombre">{producto.nombre}</p>
                            <p className="precio">${producto.precio}</p>
                            <button className="botonProducto" onClick={() => handleClickAgregar(producto)}>
                                Agregar a Carrito
                            </button>
                        </div>
                    ))}
                    <hr />
                </div>
                <br /><br />
                <hr />
            </main>
        </>
    );
}

export default Microfonogamer;