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
app.post('/marcas', (req, res) => {
    marcas.push(req.body);
    res.status(201).send('Marca foi cadastrada com sucesso')

})
export default app