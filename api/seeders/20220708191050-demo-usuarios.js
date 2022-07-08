'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'John Doe',
      email: 'John@adm.com',
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
