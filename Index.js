const colors = require('colors'); // Importa el módulo colors
const Server = require('./Server');

console.clear(); // Limpiamos la consola
const servidor = new Server(); // Inicializamos el servidor

servidor.listen(); // Iniciamos el servidor

// Ejemplo de uso de colors (opcional)
console.log('Servidor iniciado en puerto ' + servidor.port.toString().cyan);
const colors = require('colors'); // Importa el módulo colors
const Server = require('./Server');

console.clear(); // Limpiamos la consola
const servidor = new Server(); // Inicializamos el servidor

servidor.listen(); // Iniciamos el servidor

// Ejemplo de uso de colors (opcional)
console.log('Servidor iniciado en puerto ' + servidor.port.toString().cyan);
// Importar los módulos necesarios
const express = require('express');
const cors = require('cors');

// Crear una instancia de la aplicación Express
const app = express();

// Configuración básica de CORS (permite todas las solicitudes desde cualquier origen)
app.use(cors());

// Middleware para analizar JSON en las solicitudes
app.use(express.json());

// Aquí puedes agregar otros middlewares si los necesitas
// Por ejemplo: app.use(express.urlencoded({ extended: true }));

// Configuración de rutas (aquí agregarías tus rutas específicas)
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Escuchar en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
