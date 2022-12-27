import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema({
    id: { type: String },
    marca: { type: String, required: true },
    fabricante: { type: mongoose.Schema.Types.ObjectId, ref: 'fabricantes', required: true },
    distribuidor: { type: String, required: true },
    ibu: { type: Number }
});


const marcas = mongoose.model('marcas', marcaSchema);

export default marcas;