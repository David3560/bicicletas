const express = require ('express')
const router = express.Router()

const eventoController = require('../controller/eventoController')

//mostrar con get
router.get('/evento', eventoController.mostrar)

//mostrar con post
router.post('/evento/crear', eventoController.crear)

//editar
router.post('/evento/editar', eventoController.editar)

//borrar un alumno
router.get('/evento/borrar/:id', eventoController.borrar)

module.exports = router