import fabricantes from "../models/Fabricante.js"

class FabricanteController {
    static listarFabricantes = (req, res) => {
        fabricantes.find((err, fabricantes) => {
            res.status(200).json(fabricantes)
        })
    }
    static listarFabricantePorId = (req, res) => {
        const id = req.params.id;
        fabricantes.findById(id, (err, fabricantes) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id da fabricante não localizada.` })
            } else {
                res.status(200).send(fabricantes);
            }
        });
    }
    static cadastrarFabricante = (req, res) => {
        let fabricante = new fabricantes(req.body);
        fabricante.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar fabricante.` })
            } else {
                res.status(201).send(fabricante.toJSON());
            }
        });
    }
    static atualizarFabricante = (req, res) => {
        const id = req.params.id;
        fabricantes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Fabricante atualizado com sucesso." })
            } else (
                res.status(500).send({ message: err.message })
            )
        })
    }
    static excluirFabricante = (req, res) => {
        const id = req.params.id;
        fabricantes.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Fabricante removida com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
}

export default FabricanteController