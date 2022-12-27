import express from "express";
import MarcaController from "../controllers/marcasController.js"

const router = express.Router();

router
    .get("/marcas", MarcaController.listarMarcas)
    .get("/marcas/:id", MarcaController.listarMarcaPorId)
    .post("/marcas", MarcaController.cadastrarMarca)
    .put("/marcas/:id", MarcaController.atualizarMarca)
    .delete("/marcas/:id", MarcaController.excluirMarca)
export default router;