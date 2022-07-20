"use strict";
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define(
    "Niveis",
    {
      descr_nivel: DataTypes.STRING,
      descr_grade: DataTypes.STRING
    },
    { paranoid: true }
  ); // usando paranoid, para que nenhum registo seja realmente deletado ficando no banco
  Niveis.associate = function (models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: "nivel_id",
    });

  };
  return Niveis;
};
