const http = require("http")
const port = 3000;

const rotas = {
    '/': 'Posto de bebidas',
    '/distribuidoras': 'Entrei na pag de distribuidoras',
    '/marcas': 'Listagem de marcas de cervejas',
    '/sobre': "Info sobre o sistema"

}
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(rotas[req.url]);
})
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})