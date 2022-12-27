import express from "express";
import marcas from "./marcasRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })
    
    app.use(
        express.json(),
        marcas
    )
}
export default routes