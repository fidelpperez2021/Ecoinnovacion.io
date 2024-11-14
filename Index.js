require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env
const colors = require('colors');
const fs = require('fs');
const https = require('https');
const express = require('express');
const Server = require('./Server');



// Cargar certificado SSL auto-firmado
const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};


// Crear instancia de Express
const app = express();

// Configurar aplicación Express
app.use(express.static('public'));
app.use(express.json());

// Crear servidor HTTPS
https.createServer(options, app).listen(3001, () => {
    console.log('Servidor HTTPS corriendo en puerto 3001'.cyan); // Utilizando colors para dar formato
});

// Limpiar la consola
console.clear();

// Inicializar y escuchar el servidor
const server = new Server();
server.listen();
console.log(`Servidor iniciado en puerto ${server.port.toString().cyan}`);


