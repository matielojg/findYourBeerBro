import express from "express";

import db from "./config/dbConnect.js"
// import livros from "./models/livro.js"
import marcas from "./models/Marca.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão!'));
db.once("open", () => {
    console.log('Conexao feita com sucesso!');
})
const app = express();

app.use(express.json())
routes(app);

app.get('/marcas/:id', (req, res) => {
    let index = buscaMarca(req.params.id);
    res.json(marcas[index]);
})
app.post('/marcas', (req, res) => {
    marcas.push(req.body);
    res.status(201).send('Marca foi cadastrada com sucesso')
})
app.put('/marcas/:id', (req, res) => {
    let index = buscaMarca(req.params.id);
    marcas[index].marca = req.body.marca;
    res.json(marcas);
})
app.delete('/marcas/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaMarca(id);
    marcas.splice(index, 1);
    res.json(`Marca ${id} removido com sucesso`);
})

function buscaMarca(id) {
    return marcas.findIndex(marca =>
        marca.id == id
    )
}
export default app