import React, { useState } from 'react';
import axios from 'axios'; // Importa axios para hacer peticiones HTTP
import { useNavigate } from 'react-router-dom';


function Contacto() {
  
    const navigate = useNavigate(); // Declara navigate utilizando useNavigate

    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        celular: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://projectreactbackend.onrender.com/contacto', formulario);
            console.log(response.data); // Imprime la respuesta del servidor en la consola
            // Aquí puedes manejar la respuesta del servidor como desees (por ejemplo, mostrar un mensaje de éxito)
            
            // Redirigir al usuario al componente FormEnviado
            navigate('/formEnviado'); // Cambia '/form-enviado' por la ruta de tu componente FormEnviado
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
    };


    return (
        <>
            <main>
                <h1 id="h1Inicio">Contacto</h1>
                <h4 id="h4Inicio">Cualquier duda o comentario envíanos un mensaje!</h4><br />
                <img alt="" className="imagenContacto" src="./imagenes/gamerFeedback.jpg" />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label><br /><br />
                    <input type="text" id="nombre" name="nombre" required placeholder="--INSERTAR NOMBRE--" value={formulario.nombre} onChange={handleChange} /><br /><br />

                    <label htmlFor="correo">Correo:</label><br /><br />
                    <input type="email" id="correo" name="correo" required placeholder="--INSERTAR CORREO--" value={formulario.correo} onChange={handleChange} /><br /><br />

                    <label htmlFor="celular">Celular:</label><br /><br />
                    <input type="tel" id="celular" name="celular" required placeholder="--INSERTAR CELULAR--" value={formulario.celular} onChange={handleChange} /><br /><br />

                    <label htmlFor="mensaje">Comentarios:</label><br /><br />
                    <textarea id="mensaje" name="mensaje" rows="5" cols="25" placeholder="--COMENTARIOS--" value={formulario.mensaje} onChange={handleChange}></textarea><br /><br />

                    <button type="submit">Enviar</button><br /><br />
                </form>
            </main>
        </>
    );
}

export default Contacto;
