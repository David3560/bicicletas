const express = require('express')
const router = express.Router()

const bicicletaController = require('../controller/bicicletaController')

//mostrartodas la ciclas con get
router.get('/bicicleta', bicicletaController.mostrar)
//crear rutas con post
router.post('/bicicleta/crear', bicicletaController.crear)
//editar
router.post('/bicicleta/editar', bicicletaController.editar)
//borrar bicicleta (get)
router.get('/bicicleta/borrar/:id', bicicletaController.borrar)
module.exports = router