const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola desde mi backend con Express.js!');
});

// Cargar rutas de usuarios
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
}); 