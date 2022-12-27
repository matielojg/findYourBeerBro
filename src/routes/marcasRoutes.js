import express from "express";
import MarcaController from "../controllers/marcasController.js"

const router = express.Router();

router
    .get("/marcas", MarcaController.listarMarcas)
    .post("/marcas", MarcaController.cadastrarMarca)
export default router;