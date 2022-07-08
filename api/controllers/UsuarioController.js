const database = require('../models')


class UsuarioController {
    static async create(req, res) {
        const { nome, email, senha } = req.body;
        const userExists = await database.Usuarios.create()
        if (userExists) {
            res.status(400).json('Usuario Já existe!');
        }
        try {
            const user = await usuarios.create({
                nome,
                email,
                senha,

            });
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error)
        }
    }
}


module.exports = UsuarioController; 