


function Contacto(){

    return (
        <>
        <main>
        <h1 id = "h1Inicio">Contacto</h1>
        <h4 id = "h4Inicio">Cualquier duda o comentario envianos un mensaje!</h4><br/>
        <img alt = "" className = "imagenContacto" src = './imagenes/gamerFeedback.jpg'/>
        <form>

            <label for ="nombre">Nombre:</label><br/><br/>
            <input type ="text" id ="nombre" name ="nombre" required placeholder="--INSERTAR NOMBRE--"></input><br/><br/>

            <label for ="correo">Correo:</label><br/><br/>
            <input type ="email" id ="correo" name ="correo" required placeholder="--INSERTAR CORREO--"></input><br/><br/>

            <label for ="celular">Celular:</label><br/><br/>
            <input type ="tel" id ="celular" name ="celular" required placeholder="--INSERTAR CELULAR--"></input><br/><br/>

            <label  for ="comentario">Comentarios:</label><br/><br/>
            <textarea id="comentario" name="comentario" rows="5" cols="25" placeholder ="--COMENTARIOS--"></textarea><br/><br/>

            <button>Enviar</button><br/><br/>

        </form>            
        </main>
        </>
    );

}

export default Contacto