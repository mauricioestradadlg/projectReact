import React from 'react';

function PCgamer({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_PrN82LhKIlUIuA', nombre: 'PC GAMER 1', precio: 10500 },
        { id: 'prod_Pts0KyeqWszgad', nombre: 'PC GAMER 2', precio: 15999 },
        { id: 'prod_Pts1cK3GXhUtRl', nombre: 'PC GAMER 3', precio: 19899 },
        { id: 'prod_PtsARQyDbY0sey', nombre: 'PC GAMER 4', precio: 13499 },
        { id: 'prod_PtsBFgIViE15tH', nombre: 'PC GAMER 5', precio: 5999 },
    ];

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
    };

    return (
        <>
            <main id="mainP">
                <h1 id="h1P">PC GAMER</h1><br /><br />
                <div className="container">
                    <h2 id="h2P">Catálogo de Productos</h2>
                    <hr />
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto" data-product-id={producto.id}>
                            <img alt="" className="imagenProducto" src={`../imagenes/productos/pcGamer${producto.id.slice(-1)}.jpg`} />
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

export default PCgamer;
