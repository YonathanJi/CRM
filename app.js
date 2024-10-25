const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importar rutas
const clienteRoutes = require('./routes/cliente.routes');
const productoRoutes = require('./routes/producto.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB', err);
});

// Usar rutas
app.use('/clientes', clienteRoutes);
app.use('/productos', productoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

