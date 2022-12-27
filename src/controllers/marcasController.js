import marcas from "../models/Marca.js"

class MarcaController {
    static listarMarcas = (req, res) => {
        marcas.find((err, marcas) => {
            res.status(200).json(marcas)
        })
    }
    static listarMarcaPorId = (req, res) => {
        const id = req.params.id;
        marcas.findById(id, (err, marcas) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id da marca não localizada.` })
            } else {
                res.status(200).send(marcas);
            }
        });
    }
    static cadastrarMarca = (req, res) => {
        let marca = new marcas(req.body);
        marca.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar marca.` })
            } else {
                res.status(201).send(marca.toJSON());
            }
        });
    }
    static atualizarMarca = (req, res) => {
        const id = req.params.id;
        marcas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Marca atualizado com sucesso." })
            } else (
                res.status(500).send({ message: err.message })
            )
        })
    }
    static excluirMarca = (req, res) => {
        const id = req.params.id;
        marcas.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Marca removida com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
}

export default MarcaController