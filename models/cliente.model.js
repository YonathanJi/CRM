const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  cedula: { type: String, required: true, unique: true }, // Añade el campo cedula como único
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  productosComprados: [{ type: Schema.Types.ObjectId, ref: 'Producto' }]
});

module.exports = mongoose.model('Cliente', clienteSchema);

