'use strict';

module.exports = (sequelize, DataTypes) => {

  const Usuarios = sequelize.define(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },

      password: {
        type: String,
        required: true,
      },


      timestamps: true,

    },
  )

  Usuarios.pre('Usuarios', async function (next) {
    if (!this.ifModified('password')) {
      next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
  }),

    Pessoas.associate = function (models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });

      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id"

      });

    };

  return Usuarios;
};
