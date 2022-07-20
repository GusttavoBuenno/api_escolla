const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')
//const UsuarioController = require('../controllers/UsuarioController')



const router = Router()

router
  // .post('/usuario', UsuarioController.create)
  .get('/pessoas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)



module.exports = router