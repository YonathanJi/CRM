const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Crear un nuevo cliente
router.post('/', clienteController.crearCliente);

// Ruta para eliminar un cliente por ID
router.delete('/:id', clienteController.eliminarClientePorId);

// Actualizar cliente por ID
router.put('/:id', clienteController.actualizarClientePorId);

// Mostrar todos los clientes
router.get('/', clienteController.mostrarTodosLosClientes);


module.exports = router;
