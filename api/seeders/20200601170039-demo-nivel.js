module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Niveis', [
      {
        descr_nivel: 'básico',
        grade_curricular: 'Algoritimo, Logica da Programação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'intermediário',
        grade_curricular: 'JavaScript, NodeJs, APIRest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'avançado',
        grade_curricular: 'Automação, MicroServices',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Niveis', null, {})
  }
}
