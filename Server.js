const express = require('express');
const mongoose = require('mongoose');

// Definición del esquema del usuario
const usuarioSchema = new mongoose.Schema({
    Cedula: String,
    Correo: String,
    Mensaje: String,
    Nombre: String
}, { versionKey: false });

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Clase para manejar la conexión a MongoDB
class MongoDBConnection {
    constructor() {
        this.uri = process.env.MONGODB_URI || 'mongodb+srv://cj912991:E6hDAt7yYJiWyaKZ@cluster0.tewvtqr.mongodb.net/Ecoinnovacion';
    }

    async connect() {
        try {
            await mongoose.connect(this.uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Conexión a la base de datos MongoDB establecida');
        } catch (error) {
            console.error('Error al conectar a la base de datos MongoDB:', error);
            throw error;
        }
    }

    close() {
        try {
            mongoose.disconnect();
            console.log('Conexión a la base de datos MongoDB cerrada correctamente');
        } catch (error) {
            console.error('Error al cerrar la conexión a la base de datos MongoDB:', error);
            throw error;
        }
    }
}

// Clase del servidor
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.apiPath = '/api';
        this.app.use(express.static('public'));
        this.app.use(express.json());

        this.dbConnection = new MongoDBConnection();
        this.dbConnection.connect()
            .catch(error => {
                console.error('Error al conectar a la base de datos MongoDB:', error);
            });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, x-token');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });
    }

    routes() {
        // Rutas para Usuario
        this.app.get('/api/Usuario', async (req, res) => {
            try {
                const usuarios = await Usuario.find();
                res.json(usuarios);
            } catch (error) {
                console.error('Error al obtener los registros de los usuarios:', error);
                res.status(500).json({ error: 'Error al obtener los registros de los usuarios' });
            }
        });

        this.app.post('/api/Usuario', async (req, res) => {
            const newData = req.body;

            try {
                const newUsuario = new Usuario(newData);
                const savedUsuario = await newUsuario.save();
                res.status(201).json(savedUsuario);
            } catch (error) {
                console.error('Error al agregar un nuevo usuario:', error);
                res.status(500).json({ error: 'Error al agregar un nuevo usuario' });
            }
        });

        this.app.put('/api/Usuario/:id', async (req, res) => {
            const id = req.params.id;
            const newData = req.body;

            try {
                const updatedUsuario = await Usuario.findByIdAndUpdate(id, newData, { new: true });
                if (!updatedUsuario) {
                    return res.status(404).json({ error: 'No se encontró el usuario' });
                }
                res.json(updatedUsuario);
            } catch (error) {
                console.error('Error al actualizar el usuario:', error);
                res.status(500).json({ error: 'Error al actualizar el usuario' });
            }
        });

        this.app.delete('/api/Usuario/:id', async (req, res) => {
            const id = req.params.id;

            try {
                const deletedUsuario = await Usuario.findByIdAndDelete(id);
                if (!deletedUsuario) {
                    return res.status(404).json({ error: 'No se encontró el usuario' });
                }
                res.json(deletedUsuario);
            } catch (error) {
                console.error('Error al eliminar el usuario:', error);
                res.status(500).json({ error: 'Error al eliminar el usuario' });
            }
        });
    }

    listen() {
        this.app.listen(this.port, '0.0.0.0', () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;
