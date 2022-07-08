'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'adm',
      email: 'adm@adm.com',
      senha: 'adm123',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
