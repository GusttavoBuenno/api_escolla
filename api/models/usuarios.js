'use strict';


const { Model, } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {


  class Usuarios extends Model {


    static gerarSenhaHash(senha) {
      const custoHash = 12;
      return bcrypt.hash(senha, custoHash)
    }

    async adicionaSenha(senha) {
      this.senhaHash = await Usuario.gerarSenhaHash(senha)
    }
  };
  Usuarios.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length < 3) throw new Error('o Campo nome deve ter mais de 3 caracteres.')
        }
      }

    },

    senha: {
      type: DataTypes.STRING,
      senhaHash: DataTypes.STRING,
      allowNull: false

    },

  }, {
    sequelize,
    modelName: 'Usuarios',
  });


  return Usuarios;
};


