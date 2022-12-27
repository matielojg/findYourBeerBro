import express from "express";
import FabricanteController from "../controllers/fabricantesController.js"

const router = express.Router();

router
    .get("/fabricantes", FabricanteController.listarFabricantes)
    .get("/fabricantes/:id", FabricanteController.listarFabricantePorId)
    .post("/fabricantes", FabricanteController.cadastrarFabricante)
    .put("/fabricantes/:id", FabricanteController.atualizarFabricante)
    .delete("/fabricantes/:id", FabricanteController.excluirFabricante)
export default router;