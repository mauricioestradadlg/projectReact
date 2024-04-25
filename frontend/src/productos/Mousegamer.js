import React from 'react';

function Mousegamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PtsQvxTyqAq0f5', nombre: 'MOUSE GAMER 1', precio: 599, imagen: '../imagenes/productos/mouseGamer1.jpg' },
        { id: 'prod_PtsSkiDcizj0nl', nombre: 'MOUSE GAMER 2', precio: 699, imagen: '../imagenes/productos/mouseGamer2.jpg' },
        { id: 'prod_PtsU3D3YzP4q3z', nombre: 'MOUSE GAMER 3', precio: 799, imagen: '../imagenes/productos/mouseGamer3.jpg' },
        { id: 'prod_PtsW8O6NcexAlU', nombre: 'MOUSE GAMER 4', precio: 899, imagen: '../imagenes/productos/mouseGamer4.jpg' },
        { id: 'prod_PtsZQukZybkPDy', nombre: 'MOUSE GAMER 5', precio: 999, imagen: '../imagenes/productos/mouseGamer5.jpeg' },
    ];

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
    };

    return (
        <>
            <main id="mainP">
                <h1 id="h1P">MOUSE GAMER</h1><br /><br />
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

export default Mousegamer;