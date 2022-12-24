import express from "express";

const app = express();

const marcas = [
    { id: 1, "marca": "brahma" },
    { id: 2, "marca": "Skol" }
]
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})
app.get('/marcas', (req, res) => {
    res.status(200).json(marcas);
})
export default app