"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define(
    "Pessoas",
    {
      nome: {
        type:DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 3 ) throw new Error('o Campo nome deve ter mais de 3 caracteres.')
        }
      }},
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'               //valindao email
        }
      }},
      role: DataTypes.STRING,
    },
    { paranoid: true,
      defaultScope: {
        where: { ativo: true}
      },
      scopes: {
        todos: { where: {} },

      }
     }
  ); // usando paranoid, para que nenhum registo seja realmente deletado ficando no banco
  Pessoas.associate = function (models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: "docente_id",
    });
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: "estudante_id",
    })
  };
  return Pessoas;
};