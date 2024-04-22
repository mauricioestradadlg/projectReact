import Header from './componentes/Header.js'
import Navegation from './componentes/Navegation.js'
import Footer from './componentes/Footer.js'
import Carrito from './componentes/Carrito.js'

import Inicio from './paginas/Inicio.js'
import AboutUs from './paginas/AboutUs.js'
import Catalogo from './paginas/Productos.js'
import Contacto from './paginas/Contacto.js'

import PCgamer from './productos/PCgamer.js'
import Mousegamer from './productos/Mousegamer.js'
import Tecladogamer from './productos/Tecladogamer.js'
import Monitorgamer from './productos/Monitorgamer.js'
import Microfonogamer from './productos/Microfonogamer.js'
import Headsetgamer from './productos/Headsetgamer.js'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {

  return (
    
    <Router>
    <div>
        <Header/><br/>
        <Navegation/>
        <Routes>
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/" element={<Inicio/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/catalogo" element={<Catalogo/>} />
          <Route path="/catalogo/pcgamer" element={<PCgamer/>} />
          <Route path="/catalogo/tecladogamer" element={<Tecladogamer/>} />
          <Route path="/catalogo/mousegamer" element={<Mousegamer/>} />
          <Route path="/catalogo/headsetgamer" element={<Headsetgamer/>} />
          <Route path="/catalogo/microfonogamer" element={<Microfonogamer/>} />
          <Route path="/catalogo/monitorgamer" element={<Monitorgamer/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <Footer/>
        
    </div>
    </Router>
  )
  
  /*
  return (

    <div>
        <Header/><br/>
        <Navegation/>

        <Footer/>
        
    </div>

  )
  */
}

export default App
