'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [{
      email: 'adm@adm.com.br',
      senha: 'senha123'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
