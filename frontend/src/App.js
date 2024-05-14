import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'; 
import axios from 'axios';
import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';
import Carrito from './componentes/Carrito';
import BotonWha from './componentes/BotonWha';
import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Catalogo from './paginas/Productos';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';
import Compraconfirmada from './paginas/Compraconfirmada';
import PCgamer from './productos/PCgamer';
import Mousegamer from './productos/Mousegamer';
import Tecladogamer from './productos/Tecladogamer';
import Monitorgamer from './productos/Monitorgamer';
import Microfonogamer from './productos/Microfonogamer';
import Headsetgamer from './productos/Headsetgamer';
import './App.css';

function App() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        celular: '',
        mensaje: ''
    });

    const [productosEnCarrito, setProductosEnCarrito] = useState([]);


    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productosEnCarrito'));
        if (productosGuardados) {
            setProductosEnCarrito(productosGuardados);
        }
    }, []); // Se ejecuta solo una vez al montar el componente
    
    

    const agregarAlCarrito = (producto) => {
        
        const nuevosProductos = [...productosEnCarrito, producto];
        setProductosEnCarrito(nuevosProductos);
        localStorage.setItem('productosEnCarrito', JSON.stringify(nuevosProductos));
        alert('Producto agregado al carrito');
        window.location.href = 'https://projectreact-2u9m.onrender.com/carrito';
       
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
                    <Route path="/carrito" element={<Carrito productosEnCarrito={productosEnCarrito} setProductosEnCarrito={setProductosEnCarrito} />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/catalogo/pcgamer" element={<PCgamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/mousegamer" element={<Mousegamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/tecladogamer" element={<Tecladogamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/headsetgamer" element={<Headsetgamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/microfonogamer" element={<Microfonogamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/monitorgamer" element={<Monitorgamer agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/formEnviado" element={<FormEnviado />} />
                    <Route path="/compraConfirmada" element={<Compraconfirmada />} />

                    
                </Routes>
                <BotonWha />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
