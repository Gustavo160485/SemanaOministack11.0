const express = require('express');
const cors = require('cors'); //5.2K (gzipped: 2.1K)
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar / Lista uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipo de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviado na rota após "?" (filtros, paginação)
 * Routes Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da reuisição ultilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQlite, PostgreSQl, Microsofr SQL Server
  * NoSQL: MongpDB, CouchDB, etc
  */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: Table('users).Select('*').where()
  */