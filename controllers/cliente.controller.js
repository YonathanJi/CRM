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


// Eliminar cliente por ID
exports.eliminarClientePorId = async (req, res) => {
  try {
    const clienteId = req.params.id.trim();
    if (!clienteId) {
      return res.status(400).json({ message: 'ID inválido' });
    }
    
    const clienteEliminado = await Cliente.findByIdAndDelete(clienteId);
    
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ message: 'Error al eliminar cliente', error });
  }
};



// Actualizar cliente por ID
exports.actualizarClientePorId = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      req.params.id, // Usar el ID proporcionado en la ruta
      req.body, // Datos a actualizar
      { new: true, runValidators: true } // Devuelve el documento actualizado y ejecuta validadores
    );
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado); // Devuelve el cliente actualizado
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cliente', error });
  }
};

// Mostrar todos los clientes
exports.mostrarTodosLosClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Obtiene todos los clientes de la base de datos
    res.json(clientes); // Devuelve la lista de clientes
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes', error });
  }
};
