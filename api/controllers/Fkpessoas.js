const database = require("../models")


class Fkpessoas {
    static async pegaPessoasCTurmas(req, res) {
        try {
            const pessoasTurmas = await database.Fkpessoas.findAll();
            return res.status(200).json(pessoasTurmas);
        } catch (error) {

            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaFkpessoa(req, res) {
        const { id } = req.params;
        try {
            const umaFkPessoa = await database.Fkpessoas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(umaFkPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}


module.exports = Fkpessoas;