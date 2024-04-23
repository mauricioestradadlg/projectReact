import React from 'react';

function Tecladogamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PuDQYe0hcx48z2', nombre: 'TECLADO GAMER 1', precio: 999 },
        { id: 'prod_PuDRUuoyTkTJdo', nombre: 'TECLADO GAMER 2', precio: 1099 },
        { id: 'prod_PuDTQqknceSYgD', nombre: 'TECLADO GAMER 3', precio: 1199 },
        { id: 'prod_PuDV1h90zWq4bK', nombre: 'TECLADO GAMER 4', precio: 1299 },
        { id: 'prod_PuDWxMBNNZ1vvZ', nombre: 'TECLADO GAMER 5', precio: 1399 },
    ];

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
    };

    return (
        <>
            <main id="mainP">
                <h1 id="h1P">TECLADO GAMER</h1><br /><br />
                <div className="container">
                    <h2 id="h2P">Catálogo de Productos</h2>
                    <hr />
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto" data-product-id={producto.id}>
                            <img alt="" className="imagenProducto" src={`.../imagenes/productos/tecladoGamer${producto.id.slice(-1)}.jpg`} />
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

export default Tecladogamer;