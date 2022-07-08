'use strict';


const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {


  class Usuarios extends Model {


  };
  Usuarios.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length < 3) throw new Error('o Campo nome deve ter mais de 3 caracteres.')
        }
      }

    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false,

    }



  }, {
    sequelize,
    modelName: 'Usuarios',
  });


  return Usuarios;
};


