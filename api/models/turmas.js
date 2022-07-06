"use strict";
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define(
    "Turmas",
    {
      data_inicio: DataTypes.DATEONLY,
    },
    { paranoid: true }
  ); // usando paranoid, para que nenhum registo seja realmente deletado ficando no banco
  Turmas.associate = function (models) {

    Turmas.belongsTo(models.Pessoas, {
      foreignKey: "docente_id",
    });
    Turmas.belongsTo(models.Niveis, {
      foreignKey: "nivel_id",
    });
  };
  return Turmas;
};
