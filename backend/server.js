require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Conexión exitosa entre React y Node JS');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

const userBeastGadgets = new mongoose.Schema({
    nombre: String,
    correo: String,
    celular: Number,
    mensaje: String
});

const Usuario = mongoose.model('Usuario', userBeastGadgets);

app.post('/contacto', async (req, res) => {
    try {
        const { nombre, correo, celular, mensaje } = req.body;

        const newUser = new Usuario({
            nombre,
            correo,
            celular,
            mensaje
        });

        await newUser.save();
        console.log('Formulario enviado correctamente');

        res.redirect('/'); // Cambiar a la ruta de tu página de éxito
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        res.status(500).send('Error al enviar el formulario');
    }
});

app.post('/checkout-session', async (req, res) => {
    try {
        const { productos } = req.body;

        const lineItems = productos.map((producto) => ({
            price_data: {
                currency: 'mxn',
                product_data: {
                    name: producto.nombre,
                },
                unit_amount: producto.precio * 100,
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3001/formEnviado',
            cancel_url: 'http://localhost:3001/carrito',
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error al crear el checkout session:', error);
        res.status(500).json({ error: 'Error al crear el checkout session' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
