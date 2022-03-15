const  express = require('express')
const router = express.Router()

const competenciaController = require('../controller/competenciaController')

//mostrar todas las competencias(GET)
router.get('/competencia', competenciaController.mostrar)
//crear competencias(POST)
router.post('/competencia/crear', competenciaController.crear)
//editar
router.post('/competencia/editar', competenciaController.editar)
//borrar competencia
router.get('/competencia/borrar/:id', competenciaController.borrar)

module.exports = router