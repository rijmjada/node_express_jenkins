const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


// Inicia el servidor
app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
