const database = require('../models')

class UsuarioController {

    static async criaAdm(req, res) {
        const novaAdm = req.body;
        try {
            const novoAdmCriado = await database.Usuarios.create(novaAdm);
            return res.status(200).json(novoAdmCriado);
        } catch (error) {
            return res.status(500).json(error.message);

        }

    }

    static async

}



module.exports = UsuarioController;