import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importa Navigate
import Header from './componentes/Header.js';
import Navegation from './componentes/Navegation.js';
import Footer from './componentes/Footer.js';
import Carrito from './componentes/Carrito.js';
import Inicio from './paginas/Inicio.js';
import AboutUs from './paginas/AboutUs.js';
import Catalogo from './paginas/Productos.js';
import Contacto from './paginas/Contacto.js';
import PCgamer from './productos/PCgamer.js';
import Mousegamer from './productos/Mousegamer.js';
import Tecladogamer from './productos/Tecladogamer.js';
import Monitorgamer from './productos/Monitorgamer.js';
import Microfonogamer from './productos/Microfonogamer.js';
import Headsetgamer from './productos/Headsetgamer.js';
import './App.css';

function App() {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const nuevosProductos = [...productosEnCarrito, producto];
        setProductosEnCarrito(nuevosProductos);
        localStorage.setItem('productosEnCarrito', JSON.stringify(nuevosProductos));
        alert('Producto agregado al carrito');
    };

    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        localStorage.removeItem('productosEnCarrito');
    };

    return (
        <Router>
            <div>
                <Header /><br />
                <Navegation />
                <Routes>
                    <Route
                        path="/carrito"
                        element={<Carrito productosEnCarrito={productosEnCarrito} setProductosEnCarrito={setProductosEnCarrito} />} // Asegúrate de pasar setProductosEnCarrito como prop
                    />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/catalogo" element={<Catalogo />} />

                    
                    <Route
                        path="/catalogo/pcgamer"
                        element={<PCgamer agregarAlCarrito={agregarAlCarrito} />}
                    />
                    <Route 
                        path="/catalogo/mousegamer" 
                        element={<Mousegamer  agregarAlCarrito={agregarAlCarrito}  />} 
                    />
                    <Route 
                        path="/catalogo/tecladogamer" 
                        element={<Tecladogamer agregarAlCarrito={agregarAlCarrito} />} 
                    />
                    <Route 
                        path="/catalogo/headsetgamer" 
                        element={<Headsetgamer agregarAlCarrito={agregarAlCarrito} />} 
                    />
                    <Route 
                        path="/catalogo/microfonogamer" 
                        element={<Microfonogamer agregarAlCarrito={agregarAlCarrito} />} 
                    />
                    <Route 
                        path="/catalogo/monitorgamer" 
                        element={<Monitorgamer agregarAlCarrito={agregarAlCarrito} />} 
                    />


                    <Route path="/contacto" element={<Contacto />} />
                    {/* Redirecciona al carrito después de agregar un producto */}
                    <Route path="/agregar-carrito" element={<Navigate to="/carrito" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

