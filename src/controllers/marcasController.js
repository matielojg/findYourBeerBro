import marcas from "../models/Marca.js"

class MarcaController {
    static listarMarcas = (req, res) => {
        marcas.find((err, marcas) => {
            res.status(200).json(marcas)
        })

    }
}
export default MarcaController