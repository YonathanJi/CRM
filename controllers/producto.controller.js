const Producto = require('../models/producto.model');
const Cliente = require('../models/cliente.model');

exports.crearProducto = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.body.clienteId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cliente: req.body.clienteId
    });

    await nuevoProducto.save();

    // Agregar el nuevo producto al cliente
    await Cliente.findByIdAndUpdate(req.body.clienteId, {
      $push: { productosComprados: nuevoProducto._id }
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};
