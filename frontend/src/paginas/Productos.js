
import { Link } from 'react-router-dom';


function Producto(){

    return (
        <>
        <main id = "mainP">
            <h1 id = "h1P">PRODUCTOS: </h1><br/><br/>

            <div id="divProducto">

                <div class="producto">
                    <h4 class ="h4Producto">PC Gamer</h4>
                    <Link to = "/catalogo/pcgamer"><img alt =""  class="imagenProducto" src ="./imagenes/pcgamer1.jpg"/></Link>
                </div>


                <div class="producto">
                    <h4 class ="h4Producto">Mouse Gamer</h4>
                    <Link to = "/catalogo/mousegamer"><img alt =""  class="imagenProducto" src ="./imagenes/mouseGamer.jpg"/></Link>
                </div>


                <div class="producto">
                    <h4 class ="h4Producto">Teclado Gamer</h4>
                    <Link to = "/catalogo/tecladogamer"><img alt =""  class="imagenProducto" src ="./imagenes/tecladoGamer.jpg"/></Link>
                </div>

            </div>


            <div id="divProducto">

                <div class="producto">
                    <h4 class ="h4Producto">Headset Gamer</h4>
                    <Link to = "/catalogo/headsetgamer"><img alt =""  class="imagenProducto" src ="./imagenes/headsetGamer.jpeg"/></Link>
                </div>


                <div class="producto">
                    <h4 class ="h4Producto">Microfono Gamer</h4>
                    <Link to = "/catalogo/microfonogamer"><img alt =""  class="imagenProducto" src ="./imagenes/microfonoGamer.jpg"/></Link>
                </div>


                <div class="producto">
                    <h4 class ="h4Producto">Monitores Gamer</h4>
                    <Link to = "/catalogo/monitorgamer"><img alt =""  class="imagenProducto" src ="./imagenes/monitorGamer.jpg"/></Link>
                </div>


            </div>
        </main>
        </>
    );

}

export default Producto