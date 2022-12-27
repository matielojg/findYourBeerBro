import mongoose from "mongoose";

const fabricanteSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        pais: { type: String },
    }, {
    versionKey: false
}

)
const fabricantes = mongoose.model("fabricantes", fabricanteSchema)
export default fabricantes;