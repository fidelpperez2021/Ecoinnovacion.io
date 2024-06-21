const colors = require('colors'); // Importa el módulo colors
const Server = require('./Server');

console.clear(); // Limpiamos la consola
const servidor = new Server(); // Inicializamos el servidor

servidor.listen(); // Iniciamos el servidor

// Ejemplo de uso de colors (opcional)
console.log('Servidor iniciado en puerto ' + servidor.port.toString().cyan);
