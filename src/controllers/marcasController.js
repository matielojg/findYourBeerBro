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
}
export default MarcaController