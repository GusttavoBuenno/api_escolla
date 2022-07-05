const { Router } = require('express')
const Fkpessoas = require('../controllers/Fkpessoas')

const routter = Router()


router
    .get('/fkpessoas', Fkpessoas.pegaPessoasCTurmas)
    .get('/fkpessoas/:id', Fkpessoas.pegaUmaFkpessoa)

module.exports = routter