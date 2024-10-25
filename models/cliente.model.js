const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  productosComprados: [{ type: Schema.Types.ObjectId, ref: 'Producto' }]
});

module.exports = mongoose.model('Cliente', clienteSchema);
