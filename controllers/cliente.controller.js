const Cliente = require('../models/cliente.model');

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cliente', error });
  }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find().populate('productosComprados');
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes', error });
  }
};

// Obtener un cliente por cédula (como identificador principal)
exports.obtenerClientePorCedula = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({ cedula: req.params.cedula }).populate('productosComprados');
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cliente', error });
  }
};


// Actualizar cliente por cédula
exports.actualizarClientePorCedula = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findOneAndUpdate(
      { cedula: req.params.cedula },
      req.body,
      { new: true }
    );
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cliente', error });
  }
};


// Eliminar cliente por cédula
exports.eliminarClientePorCedula = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findOneAndDelete({ cedula: req.params.cedula });
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cliente', error });
  }
};
