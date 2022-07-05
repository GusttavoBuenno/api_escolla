module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Fkpessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        turma: 1,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Cintra',
        ativo: true,
        email: 'marcos@marcos.com',
        turma: 1,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Felipe Cardoso',
        ativo: true,
        email: 'felipe@felipe.com',
        turma: 2,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sandra Gomes',
        ativo: false,
        email: 'sandra@sandra.com',
        turma: 2,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Paula Morais',
        ativo: true,
        email: 'paula@paula.com',
        turma: 2,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sergio Lopes',
        ativo: true,
        email: 'sergio@sergio.com',
        turma: 3,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Fkpessoas', null, {})
  }
}
