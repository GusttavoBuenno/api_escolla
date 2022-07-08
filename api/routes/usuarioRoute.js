const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')


const router = Router()
router
    .post('/pessoas/usuarios', UsuarioController.criaAdm)



module.exports = router


