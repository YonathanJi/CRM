const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Crear un nuevo cliente
router.post('/', clienteController.crearCliente);

// Ruta para eliminar un cliente por ID
router.delete('/:id', clienteController.eliminarClientePorId);

module.exports = router;
