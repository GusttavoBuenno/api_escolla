const Router = require('express')

const Fkpessoas = require('../controllers/Fkpessoas')

const routter = Router()


router

    //get
    .get('/fkpessoas', Fkpessoas.pegaPessoasCTurmas)
    .get('/fkpessoas/:id', Fkpessoas.pegaUmaFkpessoa)


    //post
    .post('/fkpessoas', Fkpessoas.criaFk)

    //put
    .put('/fkpessoas/:id', Fkpessoas.atualizaFk)



    //delete
    .delete('/fkpessoas/:id', Fkpessoas.apagaFk)


module.exports = routter