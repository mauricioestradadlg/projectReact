



import React from 'react';

function Monitorgamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PuDtsyvnUyFDYz', nombre: 'MONITOR GAMER 1', precio: 2999 },
        { id: 'prod_PuDuXULggLmRea', nombre: 'MONITOR GAMER 2', precio: 3499 },
        { id: 'prod_PuDwkJZ7aOVPok', nombre: 'MONITOR GAMER 3', precio: 3999 },
        { id: 'prod_PuDymHjkqFQ8kc', nombre: 'MONITOR GAMER 4', precio: 4599 },
        { id: 'prod_PuDyIeiZ6hojYi', nombre: 'MONITOR GAMER 5', precio: 4999 },
    ];

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
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
                            <img alt="" className="imagenProducto" src={`../imagenes/productos/microfonoGamer${producto.id.slice(-1)}.jpg`} />
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