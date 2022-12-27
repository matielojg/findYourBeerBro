import express from "express";
import MarcaController from "../controllers/marcasController.js"

const router = express.Router();

router
    .get("/marcas", MarcaController.listarMarcas)

export default router;