'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Fkpessoas', 'turma', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('Fkpessoas', 'deletedAt')
  }
}