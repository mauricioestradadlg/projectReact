import { Link } from 'react-router-dom';




function Header(){

    return(

        <header>
            <img alt ="" src ="../imagenes/logo.jpg" width = "150" height = "150"/>
            <h1 id = "h1Index">BEAST GADGETS</h1>
            <Link to = "/carrito"><img alt ="" id ="carritoCompras" src ="../imagenes/carrito.png" width = "100" height = "100"/></Link>
        </header>
    
    );

}

export default Header