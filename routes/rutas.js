const express = require('express')
const router = express.Router()

const rutaController = require('../controller/rutaController')

router.get('/ruta', rutaController.mostrar)

//mostrar todas las rutas (get)


//crear ruta (post)
router.post('/ruta/crear', rutaController.crear)

router.post('/ruta/editar', rutaController.editar) 

router.get('/ruta/borrar/:id', rutaController.borrar)

module.exports = router