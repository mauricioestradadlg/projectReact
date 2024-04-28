require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors'); // Importa el middleware cors

// Permitir solicitudes desde el origen del frontend (http://localhost:3001)
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true  // Opcional, si estás manejando cookies o sesiones
}));

app.get('/', (req, res) => {
    res.send('Conexión exitosa entre React y Node JS');
});

// Conexión a la base de datos MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Servir los archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Definir el esquema del cliente
const userBeastGadgets = new mongoose.Schema({
    nombre: String,
    correo: String,
    celular: Number,
    mensaje: String
});

// Definir el modelo de Usuario
const Usuario = mongoose.model('Usuario', userBeastGadgets); // Agrega esta línea para definir el modelo Usuario

// Manejar la solicitud para registrar un nuevo usuario
app.post('/contacto', async (req, res) => {
    try {
        const { nombre, correo, celular, mensaje } = req.body;

        // Crear un nuevo usuario
        const newUser = new Usuario({
            nombre,
            correo,
            celular,
            mensaje
        });

        // Guardar el usuario en la base de datos
        await newUser.save();
        console.log('Formulario enviado correctamente');

        // Envía una respuesta JSON al frontend indicando éxito
        res.status(200).json({ success: true, message: 'Formulario enviado correctamente' });
    } 
    catch (error) {
        console.error('Error al enviar el formulario:', error);
        res.status(500).send('Error al enviar el formulario');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
