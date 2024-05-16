import React from 'react';
import { useNavigate } from 'react-router-dom';

function Headsetgamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PuDacfus0p6kyp', nombre: 'HEADSET GAMER 1', precio: 999, imagen: '../imagenes/productos/headsetGamer1.jpeg' },
        { id: 'prod_PuDbi0XFfRF2w4', nombre: 'HEADSET GAMER 2', precio: 1099, imagen: '../imagenes/productos/headsetGamer2.jpeg' },
        { id: 'prod_PuDdHRY7sygWa9', nombre: 'HEADSET GAMER 3', precio: 1199, imagen: '../imagenes/productos/headsetGamer3.jpeg' },
        { id: 'prod_PuDfc3y7Dd9JRi', nombre: 'HEADSET GAMER 4', precio: 1299, imagen: '../imagenes/productos/headsetGamer4.jpeg' },
        { id: 'prod_PuDglHPEsmcQPm', nombre: 'HEADSET GAMER 5', precio: 1399, imagen: '../imagenes/productos/headsetGamer5.jpeg' },
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

export default Headsetgamer;