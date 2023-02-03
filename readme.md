
# [Curso Node.js: API Rest com Express e MongoDB](https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb)

## O que aprendi:
- Criar uma API do zero, seguindo o estilo arquitetural REST;
- Aplicar boas práticas na separação dos pacotes através de models,controllers e rotas;
- Fazer requisições com os principais verbos HTTP;
- Utilizar o framework Express, largamente aplicado para desenvolver aplicações robustas e escaláveis;
- Conectar a API com um banco de dados MongoDB em nuvem;
- Criar buscas por campos específicos na API


## Comando para rodar o projeto:

npm run dev<br>
<i>OBS.: utilizar node versão^18+ para utilizar o "node --watch"</i>

## Tecnologias usadas

https://cloud.mongodb.com/v2/63a8f4cef699902b047d81fa#/clusters


## Arquivo Routes com estes endpoints
    - get("/marcas", MarcaController.listarMarcas)
    - get("/marcas/:id", MarcaController.listarMarcaPorId)
    - get("/marcas/busca", MarcaController.listarMarcaPorDistribuidor)
    - post("/marcas", MarcaController.cadastrarMarca)
    - put("/marcas/:id", MarcaController.atualizarMarca)
    - delete("/marcas/:id", MarcaController.excluirMarca)

## Example: http://localhost:3000/marcas/busca?distribuidor=SPAIPA
 <img width="680" alt="buscarPorDistribuidora.png" src="https://github.com/matielojg/findYourBeerBro/blob/dev-branch/src/images/buscarPorDistribuidora.png?raw=true">

