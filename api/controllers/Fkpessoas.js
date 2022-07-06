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

    static async atualizaFk(req, res) {
        const { id } = req.params;
        const newFk = req.body;
        try {
            await database.Fkpessoas.update(newFk, { where: { id: Number(id) } });
            const pessoaFk = await database.Fkpessoas.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(pessoaFk);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaFk(req, res) {
        const { id } = req.params;
        try {
            await database.Fkpessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensage: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraFk(req, res) {
        const { id } = req.params;
        try {
            await database.Fkpessoas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensage: `id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaFk(req, res) {
        const novaFk = req.body;
        try {
            const novaPessoaFk = await database.Fkpessoas.create(novaFk);
            return res.status(200).json(novaPessoaFk);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}


module.exports = Fkpessoas;