



import React from 'react';

function Monitorgamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PuDtsyvnUyFDYz', nombre: 'MONITOR GAMER 1', precio: 2999, imagen: '../imagenes/productos/monitorGamer1.jpg' },
        { id: 'prod_PuDuXULggLmRea', nombre: 'MONITOR GAMER 2', precio: 3499, imagen: '../imagenes/productos/monitorGamer2.jpg' },
        { id: 'prod_PuDwkJZ7aOVPok', nombre: 'MONITOR GAMER 3', precio: 3999, imagen: '../imagenes/productos/monitorGamer3.jpg' },
        { id: 'prod_PuDymHjkqFQ8kc', nombre: 'MONITOR GAMER 4', precio: 4599, imagen: '../imagenes/productos/monitorGamer4.jpg' },
        { id: 'prod_PuDyIeiZ6hojYi', nombre: 'MONITOR GAMER 5', precio: 4999, imagen: '../imagenes/productos/monitorGamer5.jpg' },
    ];

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

export default Monitorgamer;