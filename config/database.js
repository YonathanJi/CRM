const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://crm:Jonathan5896@cluster0.5ioat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;
