const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Crear un nuevo cliente
router.post('/clientes', clienteController.crearCliente);

// Obtener todos los clientes
router.get('/clientes', clienteController.obtenerClientes);

// Obtener cliente por cédula
router.get('/clientes/cedula/:cedula', clienteController.obtenerClientePorCedula);

// Actualizar cliente por cédula
router.put('/clientes/cedula/:cedula', clienteController.actualizarClientePorCedula);

// Eliminar cliente por cédula
router.delete('/clientes/cedula/:cedula', clienteController.eliminarClientePorCedula);

module.exports = router;
