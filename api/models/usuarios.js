'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {

  const Usuarios = sequelize.define(
    "Usuarios",
    {
      nome: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        required: true,
      },

      senha: {
        type: DataTypes.STRING,
        required: true,
      },


      timestamps: true,

    },
  )

  new Usuarios('Usuarios', async function (next) {
    if (!this.ifModified('senha')) {
      next()
    }
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt)
  }),

    Usuarios.associate = function (models) {
      Usuarios.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });

      Usuarios.hasMany(models.Matriculas, {
        foreignKey: "estudante_id"

      });

    };

  return Usuarios;
};
