'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fkpessoas extends Model {

    static associate(models) {
      Fkpessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Fkpessoas.hasMany(models.Matriculas, {
        foreignKey: "turma_id",
      });
      Fkpessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id"

      });
    }
  }
  Fkpessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    turma: DataTypes.STRING,
    role: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Fkpessoas',
  });
  return Fkpessoas;
};