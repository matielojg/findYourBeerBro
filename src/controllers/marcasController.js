import marcas from "../models/Marca.js"

class MarcaController {
    static listarMarcas = (req, res) => {
        marcas.find((err, marcas) => {
            res.status(200).json(marcas)
        })
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
}
export default MarcaController